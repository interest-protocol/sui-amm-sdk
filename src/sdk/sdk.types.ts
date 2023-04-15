import { MakeMoveVecTransaction, TransactionBlock } from '@mysten/sui.js';

import { Address } from '@/types';

export interface FindPoolIdArgs {
  tokenAType: Address;
  tokenBType: Address;
  account?: Address;
}

export interface CreatePoolArgs {
  coinA: MakeMoveVecTransaction['objects'][number];
  coinB: MakeMoveVecTransaction['objects'][number];
  coinAAmount: string;
  coinBAmount: string;
  coinAType: Address;
  coinBType: Address;
  txb: TransactionBlock;
}

export interface SwapArgs {
  txb: TransactionBlock;
  coinIn: MakeMoveVecTransaction['objects'][number];
  coinInAmount: string;
  coinOutMinimumAmount: string;
  coinInType: Address;
  coinOutType: Address;
  useCache?: boolean;
}
