import { MakeMoveVecTransaction, TransactionBlock } from '@mysten/sui.js';
import { ObjectTransactionArgument } from '@mysten/sui.js/src';
import { WellKnownEncoding } from '@mysten/sui.js/src/builder/utils';

import { Address } from '@/types';

export interface FindPoolIdArgs {
  tokenAType: Address;
  tokenBType: Address;
  account?: Address;
}

export interface CreatePoolArgs {
  coin0: MakeMoveVecTransaction['objects'][number] | string;
  coin1: MakeMoveVecTransaction['objects'][number] | string;
  coin0Amount: string;
  coin1Amount: string;
  coin0Type?: Address;
  coin1Type?: Address;
  txb?: TransactionBlock;
}
