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

export interface SwapTokenX {
  txb: TransactionBlock;
  coinX: MakeMoveVecTransaction['objects'][number];
  coinXAmount: string;
  coinYMinimumAmount: string;
  coinXType: Address;
  coinYType: Address;
}

export interface SwapTokenY {
  txb: TransactionBlock;
  coinY: MakeMoveVecTransaction['objects'][number];
  coinYAmount: string;
  coinXMinimumAmount: string;
  coinXType: Address;
  coinYType: Address;
}
