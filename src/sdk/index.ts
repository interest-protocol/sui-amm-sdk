import { toHEX } from '@mysten/bcs';
import {
  isValidSuiObjectId,
  JsonRpcProvider,
  TransactionBlock,
} from '@mysten/sui.js';
import invariant from 'tiny-invariant';

import {
  OBJECT_RECORD,
  SUI_CHAIN_TYPE,
  SUI_DEV_NET_CHAIN,
  SUI_TEST_NET_CHAIN,
  ZERO_ADDRESS,
} from '@/constants';
import { Address } from '@/types';
import { getReturnValuesFromInspectResults } from '@/utils';

import {
  CreatePoolArgs,
  FindPoolIdArgs,
  SwapTokenX,
  SwapTokenY,
} from './sdk.types';

export class SDK {
  constructor(
    public readonly provider: JsonRpcProvider,
    public readonly chain: SUI_CHAIN_TYPE = SUI_TEST_NET_CHAIN,
  ) {
    invariant(
      chain == SUI_TEST_NET_CHAIN || chain == SUI_DEV_NET_CHAIN,
      'Invalid network',
    );
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
  public createPoolTransactionBlock({
    txb,
    coinA,
    coinB,
    coinAAmount,
    coinBAmount,
    coinAType,
    coinBType,
  }: CreatePoolArgs): TransactionBlock {
    invariant(+coinAAmount > 0, 'Cannot add coinAAmount');
    invariant(+coinBAmount > 0, 'Cannot add coinBAmount');

    invariant(isValidSuiObjectId(coinAType), 'coinAType must be an objectId');
    invariant(isValidSuiObjectId(coinBType), 'coinBType must be an objectId');

    const objects = OBJECT_RECORD[this.chain];

    txb.moveCall({
      target: `${objects.PACKAGE_ID}::interface::create_pool`,
      arguments: [
        txb.object(objects.DEX_STORAGE_VOLATILE),
        txb.makeMoveVec({
          objects: [coinA],
        }),
        txb.makeMoveVec({
          objects: [coinB],
        }),
        txb.pure(coinAAmount),
        txb.pure(coinBAmount),
      ],
      typeArguments: [coinAType, coinBType],
    });

    return txb;
  }

  /**
   * @param txb The {TransactionBlock}
   * @param coinXAmount The amount of coinX to sell
   * @param coinYMinimumAmount The minimum amount of coinY to receive (slippage)
   * @param coinX The object of CoinX e.g. txb.gas, txb.pure("objectId")
   * @param coinXType The coinType of coinX (one being sold)
   * @param coinYType The coinType of CoinT (one being bought)
   */
  public SwapTokenX({
    txb,
    coinXAmount,
    coinYMinimumAmount,
    coinX,
    coinXType,
    coinYType,
  }: SwapTokenX): TransactionBlock {
    invariant(+coinXAmount > 0, 'Cannot add coinAAmount');

    invariant(isValidSuiObjectId(coinXType), 'coinAType must be an objectId');
    invariant(isValidSuiObjectId(coinYType), 'coinBType must be an objectId');

    const objects = OBJECT_RECORD[this.chain];

    txb.moveCall({
      target: `${objects.PACKAGE_ID}::interface::swap_x`,
      arguments: [
        txb.object(objects.DEX_STORAGE_VOLATILE),
        txb.object(objects.DEX_STORAGE_STABLE),
        txb.makeMoveVec({
          objects: [coinX],
        }),
        txb.pure(coinXAmount),
        txb.pure(coinYMinimumAmount),
      ],
      typeArguments: [coinXType, coinYType],
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
  public SwapTokenY({
    txb,
    coinY,
    coinYAmount,
    coinXMinimumAmount,
    coinXType,
    coinYType,
  }: SwapTokenY): TransactionBlock {
    invariant(+coinYAmount > 0, 'Cannot add coinAAmount');

    invariant(isValidSuiObjectId(coinXType), 'coinAType must be an objectId');
    invariant(isValidSuiObjectId(coinYType), 'coinBType must be an objectId');

    const objects = OBJECT_RECORD[this.chain];

    txb.moveCall({
      target: `${objects.PACKAGE_ID}::interface::swap_y`,
      arguments: [
        txb.object(objects.DEX_STORAGE_VOLATILE),
        txb.object(objects.DEX_STORAGE_STABLE),
        txb.makeMoveVec({
          objects: [coinY],
        }),
        txb.pure(coinYAmount),
        txb.pure(coinXMinimumAmount),
      ],
      typeArguments: [coinXType, coinYType],
    });

    return txb;
  }
}
