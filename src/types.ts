import { DexFunctions, SUI_CHAIN_TYPE } from '@/constants';

export type Address = string;

export type DexMarket = Record<string, Record<string, string>>;

export interface FindMarketArgs {
  data: DexMarket;
  coinInType: string;
  coinOutType: string;
  network: SUI_CHAIN_TYPE;
}

export interface SwapPathObject {
  baseTokens: ReadonlyArray<string>;
  coinInType: string;
  coinOutType: string;
  functionName: DexFunctions;
  typeArgs: Array<string>;
}
