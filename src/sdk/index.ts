import { toHEX } from '@mysten/bcs';
import {
  isValidSuiAddress,
  JsonRpcProvider,
  TransactionBlock,
} from '@mysten/sui.js';
import { SUI_CLOCK_OBJECT_ID } from '@mysten/sui.js';
import { pathOr } from 'ramda';
import invariant from 'tiny-invariant';

import { Network, OBJECT_RECORD, Pool, ZERO_ADDRESS } from '@/constants';
import { STABLE, VOLATILE } from '@/constants/coins';
import { Address, DexMarket } from '@/types';
import {
  findMarket,
  findSwapAmountOutput,
  getAllDynamicFields,
  getCoinsFromPoolType,
  getRemoveLiquidityAmountsFromDevInspect,
  getReturnValuesFromInspectResults,
  parseRawDEXMarkets,
  processPool,
} from '@/utils';

import { POOLS } from '../constants/pools';
import {
  AddLiquidityArgs,
  CreatePoolArgs,
  FindPoolIdArgs,
  GetCoinOutAmountArgs,
  GetRemoveLiquidityCoinsAmountsOutArgs,
  RemoveLiquidityArgs,
  SwapArgs,
} from './sdk.types';

export class SDK {
  #POOLS: Record<string, Record<string, string>>;

  constructor(
    public readonly provider: JsonRpcProvider,
    public readonly network: Network,
  ) {
    invariant(Object.values(Network).includes(network), 'Invalid network');

    this.#POOLS = POOLS[network];
  }

  /**
   * @description It returns the pool object id from a set of two ordered coin types If it returns null, it means the pool is not deployed.
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

    const objects = OBJECT_RECORD[this.network];

    txb.moveCall({
      target: `${objects.DEX_PACKAGE_ID}::interface::get_pool_id`,
      typeArguments: [VOLATILE[this.network], tokenAType, tokenBType],
      arguments: [txb.object(objects.DEX_CORE_STORAGE)],
    });

    const response = await this.provider.devInspectTransactionBlock({
      transactionBlock: txb,
      sender: account || ZERO_ADDRESS,
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
  public createVolatilePool({
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

    const objects = OBJECT_RECORD[this.network];

    txb.moveCall({
      target: `${objects.DEX_PACKAGE_ID}::interface::create_v_pool`,
      typeArguments: [coinAType, coinBType],
      arguments: [
        txb.object(objects.DEX_CORE_STORAGE),
        txb.object(SUI_CLOCK_OBJECT_ID),
        txb.makeMoveVec({
          objects: coinAList,
        }),
        txb.makeMoveVec({
          objects: coinBList,
        }),
        txb.pure(coinAAmount),
        txb.pure(coinBAmount),
      ],
    });

    return txb;
  }

  /**
   * @param txb The {TransactionBlock} class to chain
   * @param coinInList An Array of objects being sold Coin
   * @param coinInAmount The amount of the coin being sold
   * @param coinInType The type of the coin being sold
   * @param coinOutType The type of the coin being bought
   * @param coinOutMinimumAmount The minimum amount to receive in coinOutType to control slippage
   * @param useCache It defaults to false. If it is false, we will first fetch the latest pools data. If not, we will use a cache.
   * @param deadline 30 represents 30 minutes. The TX will be cancelled if not processed within the deadline
   * @param dexMarkets An object of Pools
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
    deadline = '30',
  }: SwapArgs): Promise<TransactionBlock> {
    invariant(+coinInAmount > 0, 'Cannot add coinAAmount');

    const data = dexMarkets
      ? dexMarkets
      : useCache
      ? this.#POOLS
      : await this.getLatestDEXMarkets();

    const path = findMarket({
      data,
      network: this.network,
      coinInType,
      coinOutType,
    });

    invariant(path.length > 0, 'No Market for those coins');

    const firstSwapObject = path[0];

    const objects = OBJECT_RECORD[this.network];

    const nowTime = new Date().getTime();

    // no hop swap
    if (!firstSwapObject.baseTokens.length) {
      txb.moveCall({
        target: `${objects.DEX_PACKAGE_ID}::interface::${firstSwapObject.functionName}`,
        typeArguments: firstSwapObject.typeArgs,
        arguments: [
          txb.object(objects.DEX_CORE_STORAGE),
          txb.object(SUI_CLOCK_OBJECT_ID),
          txb.makeMoveVec({
            objects: coinInList,
          }),
          txb.pure(coinInAmount),
          txb.pure(coinOutMinimumAmount),
          txb.pure((nowTime + +deadline * 60 * 1000).toString()),
        ],
      });

      return txb;
    }

    // One-hop Swap
    txb.moveCall({
      target: `${objects.DEX_PACKAGE_ID}::interface::${firstSwapObject.functionName}`,
      typeArguments: firstSwapObject.typeArgs,
      arguments: [
        txb.object(objects.DEX_CORE_STORAGE),
        txb.object(SUI_CLOCK_OBJECT_ID),
        txb.makeMoveVec({
          objects: coinInList,
        }),
        txb.pure(coinInAmount),
        txb.pure(coinOutMinimumAmount),
        txb.pure(nowTime + +deadline * 60 * 1000),
      ],
    });

    return txb;
  }

  /**
   * @description It returns the amount of the coinOutType from swapping the amount of coin type in
   * @param txb The {TransactionBlock} class to chain
   * @param coinInList An Array of objects being sold Coin
   * @param coinInAmount The amount of the coin being sold
   * @param coinInType The type of the coin being sold
   * @param coinOutType The type of the coin being bought
   * @param useCache It defaults to false. If it is false, we will first fetch the latest pools data. If not, we will use a cache.
   * @param dexMarkets An object of Pools
   */
  public async getSwapCoinOutAmount({
    txb,
    coinInList,
    coinInAmount,
    coinInType,
    coinOutType,
    useCache = false,
    dexMarkets,
  }: GetCoinOutAmountArgs) {
    invariant(+coinInAmount > 0, 'Cannot add coinAAmount');

    const data = dexMarkets
      ? dexMarkets
      : useCache
      ? this.#POOLS
      : await this.getLatestDEXMarkets();

    const path = findMarket({
      data,
      network: this.network,
      coinInType,
      coinOutType,
    });

    invariant(path.length > 0, 'No Market for those coins');

    const firstSwapObject = path[0];

    const objects = OBJECT_RECORD[this.network];

    const nowTime = new Date().getTime();

    // no hop swap
    if (!firstSwapObject.baseTokens.length) {
      txb.moveCall({
        target: `${objects.DEX_PACKAGE_ID}::interface::${firstSwapObject.functionName}`,
        typeArguments: firstSwapObject.typeArgs,
        arguments: [
          txb.object(objects.DEX_CORE_STORAGE),
          txb.object(SUI_CLOCK_OBJECT_ID),
          txb.makeMoveVec({
            objects: coinInList,
          }),
          txb.pure(coinInAmount),
          txb.pure('0'),
          txb.pure((nowTime + 1000 * 60 * 1000).toString()),
        ],
      });

      const response = await this.provider.devInspectTransactionBlock({
        transactionBlock: txb,
        sender: ZERO_ADDRESS,
      });

      return findSwapAmountOutput({
        data: response,
        packageId: objects.DEX_PACKAGE_ID,
      });
    }

    // One-hop Swap
    txb.moveCall({
      target: `${objects.DEX_PACKAGE_ID}::interface::${firstSwapObject.functionName}`,
      typeArguments: firstSwapObject.typeArgs,
      arguments: [
        txb.object(objects.DEX_CORE_STORAGE),
        txb.object(SUI_CLOCK_OBJECT_ID),
        txb.makeMoveVec({
          objects: coinInList,
        }),
        txb.pure(coinInAmount),
        txb.pure('0'),
        txb.pure((nowTime + 1000 * 60 * 1000).toString()),
      ],
    });

    const response = await this.provider.devInspectTransactionBlock({
      transactionBlock: txb,
      sender: ZERO_ADDRESS,
    });

    return {
      amounts: findSwapAmountOutput({
        data: response,
        packageId: objects.DEX_PACKAGE_ID,
      }),
      response,
    };
  }

  /**
   * @description It allows a user to add liquidity to a pool. Please note that the coins do not need to be ordered
   * @param txb The {TransactionBlock} class to chain
   * @param stable it determines if the liquidity will be added to a stable or volatile pool
   * @param coinAType The type of the first Coin Pair to be added
   * @param coinBType The type of the second Coin Pair to be added
   * @param coinAList An array of objects of coin0Type
   * @param coinBList An array of objects of coin1Type
   * @param coinAAmount The desired amount of coin0Type to add
   * @param coinBAmount The desired amount of coin1Type to add
   * @param lpCoinMinOut The minimum amount of LpCoins to receive from adding liquidity
   */
  public addLiquidity({
    txb,
    stable,
    coinAType,
    coinBType,
    coinAList,
    coinBList,
    coinAAmount,
    coinBAmount,
    lpCoinMinOut = '0',
  }: AddLiquidityArgs): TransactionBlock {
    const objects = OBJECT_RECORD[this.network];

    txb.moveCall({
      target: `${objects.DEX_PACKAGE_ID}::interface::add_liquidity`,
      typeArguments: [
        stable ? STABLE[this.network] : VOLATILE[this.network],
        coinAType,
        coinBType,
      ],
      arguments: [
        txb.object(objects.DEX_CORE_STORAGE),
        txb.object(SUI_CLOCK_OBJECT_ID),
        txb.makeMoveVec({
          objects: coinAList,
        }),
        txb.makeMoveVec({
          objects: coinBList,
        }),
        txb.pure(coinAAmount),
        txb.pure(coinBAmount),
        txb.pure(lpCoinMinOut),
      ],
    });

    return txb;
  }

  /**
   * @description It removes liquidity from a pool. Please note that the types do not need to be ordered.
   * @param txb The {TransactionBlock} class to chain
   * @param stable It indicates if the user wishes to remove from a stable or volatile pool
   * @param coin0Type The first coin of the pool
   * @param coinBType The second coin of the pool
   * @param lpCoinList An array of lpCoin objects to be burned to remove the underlying
   * @param lpCoinAmount The desired amount of LP amount to add
   * @param coinAMinAmount The minimum amount of Coin<A> that the user wishes to receive
   * @param coinBMinAmount The minimum amount of Coin<B> that the user wishes to receive
   */
  public removeLiquidity({
    txb,
    stable,
    coinAType,
    coinBType,
    lpCoinList,
    lpCoinAmount,
    coinAMinAmount,
    coinBMinAmount,
  }: RemoveLiquidityArgs): TransactionBlock {
    const objects = OBJECT_RECORD[this.network];

    txb.moveCall({
      target: `${objects.DEX_PACKAGE_ID}::interface::remove_liquidity`,
      typeArguments: [
        stable ? STABLE[this.network] : VOLATILE[this.network],
        coinAType,
        coinBType,
      ],
      arguments: [
        txb.object(objects.DEX_CORE_STORAGE),
        txb.object(SUI_CLOCK_OBJECT_ID),
        txb.makeMoveVec({
          objects: lpCoinList,
        }),
        txb.pure(lpCoinAmount),
        txb.pure(coinAMinAmount),
        txb.pure(coinBMinAmount),
      ],
    });

    return txb;
  }

  /**
   * @description It returns to the user an object with the coin types as key and the amount of tokens they will receive. Note that the types do not need to be ordered
   * @param txb The {TransactionBlock} class to chain
   * @param stable It indicates if it is withdrawing from a stable or volatile pool
   * @param coinAType It represents one of the Coin types from a pool
   * @param coinBType It represents the other Coin type from a pool
   * @param lpCoinList An array of Lp Coin objects of LPCoin<CoinAType, CoinBType>.
   * @param lpCoinAmount The minimum amount of Lp Coin objects of LPCoin<CoinAType, CoinBType> to receive
   * @param account The sender of the transaction
   */
  public async getRemoveLiquidityCoinsAmountsOut({
    txb,
    stable,
    coinAType,
    coinBType,
    lpCoinList,
    lpCoinAmount,
    account = ZERO_ADDRESS,
  }: GetRemoveLiquidityCoinsAmountsOutArgs): Promise<Record<
    string,
    string
  > | null> {
    const objects = OBJECT_RECORD[this.network];

    txb.moveCall({
      target: `${objects.DEX_PACKAGE_ID}::interface::remove_liquidity`,
      typeArguments: [
        stable ? STABLE[this.network] : VOLATILE[this.network],
        coinAType,
        coinBType,
      ],
      arguments: [
        txb.object(objects.DEX_CORE_STORAGE),
        txb.object(SUI_CLOCK_OBJECT_ID),
        txb.makeMoveVec({
          objects: lpCoinList,
        }),
        txb.pure(lpCoinAmount),
        txb.pure('0'),
        txb.pure('0'),
      ],
    });

    const data = await this.provider.devInspectTransactionBlock({
      transactionBlock: txb,
      sender: account,
    });

    return getRemoveLiquidityAmountsFromDevInspect({
      packageId: objects.DEX_PACKAGE_ID,
      results: data,
      coinAType,
      coinBType,
    });
  }

  /**
   * @description The coin types do not need to be ordered. The SDK does not know every single pool in the DEX
   * @param coinAType
   * @param coinBType
   */
  public getSortedPoolCoins(coinAType: string, coinBType: string) {
    const poolType = pathOr(null, [coinAType, coinBType], this.#POOLS);
    return poolType ? getCoinsFromPoolType(poolType) : null;
  }

  /**
   * @description It returns the cached Markets [coinAType][coinBType] PoolType
   */
  public getCachedMarkets(): DexMarket {
    return this.#POOLS;
  }

  /**
   * @description It returns a pool object from a Pool Object Id
   * @param poolObjectId The id of Pool object
   */
  public async getPool(poolObjectId: string): Promise<Pool> {
    const data = await this.provider.getObject({
      id: poolObjectId,
      options: { showContent: true, showType: true },
    });

    return processPool(data);
  }

  private async getLatestDEXMarkets(): Promise<DexMarket> {
    const objects = OBJECT_RECORD[this.network];

    const poolsDataArray = await getAllDynamicFields(
      this.provider,
      objects.DEX_POOLS,
    );

    const markets = parseRawDEXMarkets(poolsDataArray);

    this.#POOLS = markets;

    return markets;
  }
}
