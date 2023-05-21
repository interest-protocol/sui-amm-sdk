import { MakeMoveVecTransaction, TransactionBlock } from '@mysten/sui.js';

import { Address, DexMarket } from '@/types';

export interface FindPoolIdArgs {
  tokenAType: Address;
  tokenBType: Address;
  account?: Address;
}

export interface CreatePoolArgs {
  coinAList: MakeMoveVecTransaction['objects'][number][];
  coinBList: MakeMoveVecTransaction['objects'][number][];
  coinAAmount: string;
  coinBAmount: string;
  coinAType: Address;
  coinBType: Address;
  txb: TransactionBlock;
}

export interface SwapArgs {
  txb: TransactionBlock;
  coinInList: MakeMoveVecTransaction['objects'][number][];
  coinInAmount: string;
  coinOutMinimumAmount: string;
  coinInType: Address;
  coinOutType: Address;
  useCache?: boolean;
  dexMarkets?: DexMarket;
  deadline?: string;
}

export interface QuoteSwapArgs {
  coinInAmount: string;
  coinInType: Address;
  coinOutType: Address;
  useCache?: boolean;
  dexMarkets?: DexMarket;
  account?: string;
}

export interface AddLiquidityArgs {
  txb: TransactionBlock;
  stable: boolean;
  coinAType: string;
  coinBType: string;
  coinAList: MakeMoveVecTransaction['objects'][number][];
  coinBList: MakeMoveVecTransaction['objects'][number][];
  coinAAmount: string;
  coinBAmount: string;
  lpCoinMinOut?: string;
}

export interface QuoteAddLiquidityArgs {
  stable: boolean;
  coin0Type: string;
  coin1Type: string;
  coin0Amount: string;
  coin1Amount: string;
}

export interface RemoveLiquidityArgs {
  txb: TransactionBlock;
  stable: boolean;
  coinAType: string;
  coinBType: string;
  lpCoinList: MakeMoveVecTransaction['objects'][number][];
  lpCoinAmount: string;
  coinAMinAmount: string;
  coinBMinAmount: string;
}

export interface QuoteRemoveLiquidityArgs {
  stable: boolean;
  coin0Type: string;
  coin1Type: string;
  lpCoinAmount: string;
}
