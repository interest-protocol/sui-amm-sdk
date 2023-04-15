import { toHEX } from '@mysten/bcs';
import {
  isValidSuiAddress,
  JsonRpcProvider,
  TransactionBlock,
} from '@mysten/sui.js';
import { mergeDeepRight, pathOr } from 'ramda';
import invariant from 'tiny-invariant';

import {
  OBJECT_RECORD,
  SUI_CHAIN_TYPE,
  SUI_DEV_NET_CHAIN,
  SUI_TEST_NET_CHAIN,
  ZERO_ADDRESS,
} from '@/constants';
import { Address, DexMarket } from '@/types';
import {
  findMarket,
  getCoinsFromPoolType,
  getReturnValuesFromInspectResults,
  parseRawDEXMarkets,
} from '@/utils';

import { POOLS } from '../constants/pools';
import { CreatePoolArgs, FindPoolIdArgs, SwapArgs } from './sdk.types';

export class SDK {
  #POOLS: Record<string, Record<string, string>>;

  constructor(
    public readonly provider: JsonRpcProvider,
    public readonly chain: SUI_CHAIN_TYPE = SUI_TEST_NET_CHAIN,
  ) {
    invariant(
      chain == SUI_TEST_NET_CHAIN || chain == SUI_DEV_NET_CHAIN,
      'Invalid network',
    );

    this.#POOLS = POOLS[chain];
  }

  /**
   * @description If it returns null, it means the pool is not deployed.
   * @param tokenAType The coin A in Pool<A, B>
   * @param tokenBType The coin B in Pool<A,B>
   * @param account The caller account, it will default to @0x0 if not passed
   */
  public async findPoolId({
    tokenAType,
    tokenBType,
    account = ZERO_ADDRESS,
  }: FindPoolIdArgs): Promise<Address | null> {
    invariant(isValidSuiAddress(account), 'Invalid Sui Address');
    const txb = new TransactionBlock();

    const objects = OBJECT_RECORD[this.chain];

    txb.moveCall({
      target: `${objects.PACKAGE_ID}::interface::get_v_pool_id`,
      arguments: [txb.object(objects.DEX_STORAGE_VOLATILE)],
      typeArguments: [tokenAType, tokenBType],
    });

    const response = await this.provider.devInspectTransactionBlock({
      transactionBlock: txb,
      sender: account,
    });

    if (response.effects.status.status === 'failure') return null;

    const data = getReturnValuesFromInspectResults(response);

    if (!data || !data.length) return null;

    return `0x${toHEX(Uint8Array.from(data[0]))}`;
  }

  /**
   * @description It returns a {TransactionBlock} to be called
   * @param txb The {TransactionBlock} that will be returned
   * @param coinA An ObjectTransactionArgument of Coin0 on Pool<0,1>
   * @param coinB An ObjectTransactionArgument of Coin1 on Pool<0,1>
   * @param coinAAmount The desired value to add for coin0
   * @param coinBAmount The desired value to add for coin1
   * @param coinAType The type of Coin0
   * @param coinBType The type of Coin1
   * @return txb {TransactionBlock}
   */
  public createPool({
    txb,
    coinAList,
    coinBList,
    coinAAmount,
    coinBAmount,
    coinAType,
    coinBType,
  }: CreatePoolArgs): TransactionBlock {
    invariant(+coinAAmount > 0, 'Cannot add coinAAmount');
    invariant(+coinBAmount > 0, 'Cannot add coinBAmount');

    const objects = OBJECT_RECORD[this.chain];

    txb.moveCall({
      target: `${objects.PACKAGE_ID}::interface::create_pool`,
      arguments: [
        txb.object(objects.DEX_STORAGE_VOLATILE),
        txb.makeMoveVec({
          objects: coinAList,
        }),
        txb.makeMoveVec({
          objects: coinBList,
        }),
        txb.pure(coinAAmount),
        txb.pure(coinBAmount),
      ],
      typeArguments: [coinAType, coinBType],
    });

    return txb;
  }

  /**
   * @param txb The {TransactionBlock} class to chain
   * @param coinIn The Coin being sold
   * @param coinInAmount The amount of the coin being sold
   * @param coinInType The type of the coin being sold
   * @param coinOutType The type of the coin being bought
   * @param coinOutMinimumAmount The minimum amount to receive in coinOutType to control slippage
   * @param useCache It defaults to false. If it is false, we will first fetch the latest pools data. If not, we will use a cache.
   */
  public async swap({
    txb,
    coinInList,
    coinInAmount,
    coinInType,
    coinOutType,
    coinOutMinimumAmount,
    useCache = false,
    dexMarkets,
  }: SwapArgs): Promise<TransactionBlock> {
    invariant(+coinInAmount > 0, 'Cannot add coinAAmount');

    const data = dexMarkets
      ? dexMarkets
      : useCache
      ? this.#POOLS
      : await this.getLatestDEXMarkets();

    const path = findMarket({
      data,
      network: this.chain,
      coinInType,
      coinOutType,
    });

    invariant(path.length > 0, 'No Market for those coins');

    const firstSwapObject = path[0];

    const objects = OBJECT_RECORD[this.chain];

    // no hop swap
    if (!firstSwapObject.baseTokens.length) {
      txb.moveCall({
        target: `${objects.PACKAGE_ID}::interface::${firstSwapObject.functionName}`,
        typeArguments: firstSwapObject.typeArgs,
        arguments: [
          txb.object(objects.DEX_STORAGE_VOLATILE),
          txb.object(objects.DEX_STORAGE_STABLE),
          txb.makeMoveVec({
            objects: coinInList,
          }),
          txb.pure(coinInAmount),
          txb.pure(coinOutMinimumAmount),
        ],
      });
      return txb;
    }

    // One Hop Swap
    txb.moveCall({
      target: `${objects.PACKAGE_ID}::interface::${firstSwapObject.functionName}`,
      typeArguments: firstSwapObject.typeArgs,
      arguments: [
        txb.object(objects.DEX_STORAGE_VOLATILE),
        txb.object(objects.DEX_STORAGE_STABLE),
        txb.makeMoveVec({
          objects: coinInList,
        }),
        txb.pure(coinInAmount),
        txb.pure(coinOutMinimumAmount),
      ],
    });

    return txb;
  }
  /**
   * @param txb The {TransactionBlock}
   * @param coinY The object of CoinY e.g. txb.gas, txb.pure("objectId")
   * @param coinYAmount The amount of coinY to sell
   * @param coinXMinimumAmount The minimum amount of coinX to receive (slippage)
   * @param coinXType The coinType of coinX (one being bought)
   * @param coinYType The coinType of CoinT (one being sold)
   */

  /**
   * @description The coin types do not need to be ordered. The SDK does not know every single pool in the DEX
   * @param coinAType
   * @param coinBType
   */
  public getSortedPoolCoins(coinAType: string, coinBType: string) {
    const poolType = pathOr(null, [coinAType, coinBType], this.#POOLS);
    return poolType ? getCoinsFromPoolType(poolType) : null;
  }

  public getCachedMarkets(): DexMarket {
    return this.#POOLS;
  }

  private async getLatestDEXMarkets(): Promise<DexMarket> {
    const objects = OBJECT_RECORD[this.chain];

    const [volatileData, stableData] = await Promise.all([
      this.provider.getDynamicFields({
        parentId: objects.VOLATILE_POOLS_OBJECT_ID,
      }),
      this.provider.getDynamicFields({
        parentId: objects.STABLE_POOLS_OBJECT_ID,
      }),
    ]);

    const volatileMarkets = parseRawDEXMarkets(volatileData.data, false);
    const stableMarkets = parseRawDEXMarkets(stableData.data, true);

    const dexMarkets = mergeDeepRight(volatileMarkets, stableMarkets);

    this.#POOLS = dexMarkets;

    return dexMarkets;
  }
}
