import { SUI_CHAIN_TYPE } from '@/constants';
import { DexFunctions } from '@/constants';

export type Address = `0x${string}`;

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
