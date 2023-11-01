import { DynamicFieldPage, SuiClient } from '@mysten/sui.js/client';

import { DexFunctions, Network } from '@/constants';
export type Address = string;

export type DexMarket = Record<string, Record<string, string>>;

export interface FindMarketArgs {
  data: DexMarket;
  coinInType: string;
  coinOutType: string;
  network: Network;
}

export interface SwapPathObject {
  baseTokens: ReadonlyArray<string>;
  coinInType: string;
  coinOutType: string;
  functionName: DexFunctions;
  typeArgs: Array<string>;
}

export interface GetAllDynamicFieldsInternalArgs {
  cursor: null | string;
  data: DynamicFieldPage['data'];
  parentId: string;
  suiClient: SuiClient;
}

export interface FindAllMarkets {
  markets: DexMarket;
  coinInType: string;
  coinOutType: string;
  baseTokens: ReadonlyArray<string>;
}
