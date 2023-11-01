import {
  TransactionBlock,
  TransactionObjectArgument,
} from '@mysten/sui.js/transactions';

import { Address, DexMarket, SwapPathObject } from '@/types';

export interface FindPoolIdArgs {
  tokenAType: Address;
  tokenBType: Address;
  stable: boolean;
  account?: Address;
}

export interface CreatePoolArgs {
  coinAList: (TransactionObjectArgument | string)[];
  coinBList: (TransactionObjectArgument | string)[];
  coinAAmount: string;
  coinBAmount: string;
  coinAType: Address;
  coinBType: Address;
  txb: TransactionBlock;
}

export interface SwapArgs {
  txb: TransactionBlock;
  coinInList: (TransactionObjectArgument | string)[];
  coinInAmount: string;
  coinOutMinimumAmount: string;
  coinInType: Address;
  coinOutType: Address;
  useCache?: boolean;
  dexMarkets?: DexMarket;
  deadline?: string;
}

export interface AddLiquidityArgs {
  txb: TransactionBlock;
  stable: boolean;
  coinAType: string;
  coinBType: string;
  coinAList: (TransactionObjectArgument | string)[];
  coinBList: (TransactionObjectArgument | string)[];
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
  lpCoinList: (TransactionObjectArgument | string)[];
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
export interface QuoteSwapArgs {
  coinInType: string;
  coinOutType: string;
  markets?: DexMarket;
  baseTokens?: ReadonlyArray<string>;
  useCache?: boolean;
  coinInAmount: string;
}

export interface QuoteSwapReturn {
  swapObject: SwapPathObject;
  amount: string;
}
