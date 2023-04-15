import { DevInspectResults } from '@mysten/sui.js';
import { DynamicFieldInfo } from '@mysten/sui.js/src/types/dynamic_fields';
import { head, isEmpty, pathOr, propOr } from 'ramda';

import { DexFunctions } from '@/constants';

import { DEX_BASE_TOKEN_ARRAY } from './constants/coins';
import { DexMarket, FindMarketArgs, SwapPathObject } from './types';

export const getReturnValuesFromInspectResults = (
  x: DevInspectResults,
): [number[], string] | null => {
  const results = propOr([], 'results', x) as DevInspectResults['results'];

  if (!results?.length) return null;

  const firstElem = head(results);

  if (!firstElem) return null;

  const returnValues = firstElem?.returnValues;

  if (!returnValues) return null;
  const result = head(returnValues);
  return result ? result : null;
};

export const getCoinsFromPoolType = (poolType: string) => ({
  coinXType: poolType.split('<')[1].split(',')[0].trim(),
  coinYType: poolType.split('<')[1].split(',')[1].split('>')[0].trim(),
});

export const addCoinTypeToTokenType = (x: string): string =>
  `0x2::coin::Coin<${x}>`;

export const findMarket = ({
  data,
  network,
  coinInType,
  coinOutType,
}: FindMarketArgs): ReadonlyArray<SwapPathObject> => {
  if (isEmpty(data)) return [];

  const poolType = pathOr(
    null,
    [addCoinTypeToTokenType(coinInType), addCoinTypeToTokenType(coinOutType)],
    data,
  );

  // No Hop Swap X -> Y
  if (poolType) {
    const { coinXType, coinYType } = getCoinsFromPoolType(poolType);

    return [
      {
        baseTokens: [],
        coinInType,
        coinOutType,
        functionName:
          coinInType === coinXType ? DexFunctions.SwapX : DexFunctions.SwapY,
        typeArgs: [coinXType, coinYType],
      },
    ];
  }

  // One Hop Swap
  return DEX_BASE_TOKEN_ARRAY[network].reduce(
    (acc, element): ReadonlyArray<SwapPathObject> => {
      const firstPool = pathOr(
        null,
        [addCoinTypeToTokenType(coinInType), addCoinTypeToTokenType(element)],
        data,
      );
      const secondPool = pathOr(
        null,
        [addCoinTypeToTokenType(coinOutType), addCoinTypeToTokenType(element)],
        data,
      );

      if (firstPool && secondPool)
        return [
          ...acc,
          {
            baseTokens: [element],
            coinOutType,
            coinInType,
            functionName: DexFunctions.OneHopSwap,
            typeArgs: [coinInType, element, coinOutType],
          },
        ];

      return acc;
    },
    [] as ReadonlyArray<SwapPathObject>,
  );
};

export const parseRawDEXMarkets = (
  data: DynamicFieldInfo[],
  isStable: boolean,
): DexMarket => {
  if (!data) return {};

  return data.reduce((acc, elem) => {
    const type = elem.objectType.split(isStable ? 'SPool' : 'VPool');

    const tokensTypes = type[1].split(',');
    const tokenInType = tokensTypes[0].trim().substring(1);
    const tokenOutType = tokensTypes[1]
      .trim()
      .substring(0, tokensTypes[1].length - 2);

    const parsedTokenIn = addCoinTypeToTokenType(tokenInType);
    const parsedTokenOut = addCoinTypeToTokenType(tokenOutType);

    if (!acc[parsedTokenIn]) acc[parsedTokenIn] = {};
    if (!acc[parsedTokenOut]) acc[parsedTokenOut] = {};

    return {
      ...acc,
      [parsedTokenIn]: {
        ...acc[parsedTokenIn],
        [parsedTokenOut]: elem.objectType,
      },
      [parsedTokenOut]: {
        ...acc[parsedTokenOut],
        [parsedTokenIn]: elem.objectType,
      },
    };
  }, {} as DexMarket);
};
