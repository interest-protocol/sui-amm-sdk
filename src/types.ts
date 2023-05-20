import { DevInspectResults, JsonRpcProvider } from '@mysten/sui.js';
import { DynamicFieldPage } from '@mysten/sui.js/src/types/dynamic_fields';

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
  provider: JsonRpcProvider;
}

export interface GetRemoveLiquidityAmountsFromDevInspectArgs {
  packageId: string;
  results: DevInspectResults | undefined;
  coinAType: string;
  coinBType: string;
}
