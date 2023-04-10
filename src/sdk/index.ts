import { toHEX } from '@mysten/bcs';
import { JsonRpcProvider, TransactionBlock } from '@mysten/sui.js';
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

import { CreatePoolArgs, FindPoolIdArgs } from './sdk.types';

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
   * @param txb The user can pass a {TransactionBlock} to chain
   * @param coin0 An ObjectTransactionArgument or type of the Coin0 on Pool<0,1>
   * @param coin1 An ObjectTransactionArgument or type of the Coin1 on Pool<0,1>
   * @param coin1Amount The desired value to add for coin0
   * @param coin0Amount The desired value to add for coin1
   * @param coin0Type The type of Coin0, it can be undefined if coin0 is a type
   * @param coin1Type The type of Coin1, it can be undefined if coin1 is a type
   */
  public createPoolTransactionBlock({
    txb,
    coin0,
    coin1,
    coin1Amount,
    coin0Amount,
    coin0Type,
    coin1Type,
  }: CreatePoolArgs): TransactionBlock {
    invariant(+coin0Amount > 0, 'Cannot add coin0Amount');
    invariant(+coin1Amount > 0, 'Cannot add coin1Amount');
    invariant(coin0, 'Must provide coin0');

    const isCoin0String = typeof coin0 === 'string';
    const isCoin1String = typeof coin1 === 'string';

    if (!coin0Type) invariant(isCoin0String, 'coin0 must be an objectId');
    if (!coin1Type) invariant(isCoin1String, 'coin1 must be an objectId');

    const tx = txb ? txb : new TransactionBlock();
    const objects = OBJECT_RECORD[this.chain];

    tx.moveCall({
      target: `${objects.PACKAGE_ID}::interface::create_pool`,
      arguments: [
        tx.object(objects.DEX_STORAGE_VOLATILE),
        tx.makeMoveVec({
          objects: [isCoin0String ? tx.object(coin0) : coin0],
        }),
        tx.makeMoveVec({
          objects: [isCoin1String ? tx.object(coin1) : coin1],
        }),
        tx.pure(coin0Amount),
        tx.pure(coin1Amount),
      ],
      typeArguments: [
        isCoin0String ? coin0 : coin0Type!,
        isCoin1String ? coin1 : coin1Type!,
      ],
    });

    return tx;
  }
}
