import {
  DevInspectResults,
  DynamicFieldInfo,
  DynamicFieldPage,
  SuiClient,
  SuiObjectResponse,
} from '@mysten/sui.js/client';
import { head, isEmpty, pathOr, propOr } from 'ramda';

import { DEFAULT_POOL, DexFunctions, Pool } from '@/constants';

import { DEX_BASE_TOKEN_ARRAY } from './constants/coins';
import {
  DexMarket,
  FindAllMarkets,
  FindMarketArgs,
  GetAllDynamicFieldsInternalArgs,
  SwapPathObject,
} from './types';

export const getReturnValuesFromInspectResults = (
  x: DevInspectResults,
): Array<[number[], string]> | null => {
  const results = propOr([], 'results', x) as DevInspectResults['results'];

  if (!results?.length) return null;

  const firstElem = head(results);

  if (!firstElem) return null;

  const returnValues = firstElem?.returnValues;

  return returnValues ? returnValues : null;
};

export const getCoinsFromPoolType = (poolType: string) => {
  const type = poolType.split('Pool');
  const poolArgs = type[1];
  const tokens = poolArgs.split(',');
  return {
    coinXType: tokens[1].trim(),
    coinYType: tokens[2].split('>')[0].trim(),
  };
};

export const addCoinTypeToTokenType = (x: string): string =>
  `0x2::coin::Coin<${x}>`;

export const findAllMarkets = ({
  markets,
  coinInType,
  coinOutType,
  baseTokens,
}: FindAllMarkets): ReadonlyArray<SwapPathObject> => {
  if (isEmpty(markets)) return [];

  const poolType = pathOr(
    null,
    [addCoinTypeToTokenType(coinInType), addCoinTypeToTokenType(coinOutType)],
    markets,
  );

  const acc = [] as Array<SwapPathObject>;

  // No Hop Swap X -> Y
  if (poolType) {
    const { coinXType, coinYType } = getCoinsFromPoolType(poolType);

    acc.push({
      baseTokens: [],
      coinInType,
      coinOutType,
      functionName:
        coinInType === coinXType ? DexFunctions.SwapX : DexFunctions.SwapY,
      typeArgs: [coinXType, coinYType],
    });
  }

  // One Hop Swap
  return baseTokens.reduce((acc, element) => {
    const firstPool = pathOr(
      null,
      [addCoinTypeToTokenType(coinInType), addCoinTypeToTokenType(element)],
      markets,
    );
    const secondPool = pathOr(
      null,
      [addCoinTypeToTokenType(coinOutType), addCoinTypeToTokenType(element)],
      markets,
    );

    if (firstPool && secondPool)
      return acc.concat([
        {
          baseTokens: [element],
          coinOutType,
          coinInType,
          functionName: DexFunctions.OneHopSwap,
          typeArgs: [coinInType, element, coinOutType],
        },
      ]);

    return acc;
  }, acc);
};

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

export const parseRawDEXMarkets = (data: DynamicFieldInfo[]): DexMarket => {
  if (!data) return {};

  return data.reduce((acc, elem) => {
    const { coinXType, coinYType } = getCoinsFromPoolType(elem.objectType);

    const parsedTokenIn = addCoinTypeToTokenType(coinXType);
    const parsedTokenOut = addCoinTypeToTokenType(coinYType);

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

const getAllDynamicFieldsInternal = async ({
  data,
  cursor,
  parentId,
  suiClient,
}: GetAllDynamicFieldsInternalArgs): Promise<DynamicFieldPage['data']> => {
  const newData = await suiClient.getDynamicFields({
    parentId,
    cursor: cursor,
  });

  const nextData = data.concat(newData.data);

  if (!newData.hasNextPage) return nextData;

  return getAllDynamicFieldsInternal({
    data: nextData,
    cursor: newData.nextCursor,
    parentId,
    suiClient,
  });
};

export const getAllDynamicFields = async (
  suiClient: SuiClient,
  parentId: string,
) => {
  const data = await suiClient.getDynamicFields({
    parentId,
  });

  return data.hasNextPage
    ? getAllDynamicFieldsInternal({
        data: data.data,
        cursor: data.nextCursor,
        parentId,
        suiClient,
      })
    : data.data;
};

export const processPool = (data: undefined | SuiObjectResponse): Pool => {
  if (!data) return DEFAULT_POOL;

  const poolType: string = pathOr('', ['data', 'type'], data);

  const stable = poolType.includes('Stable');

  if (!poolType) return DEFAULT_POOL;
  const { coinXType: token0Type, coinYType: token1Type } =
    getCoinsFromPoolType(poolType);

  return {
    token0Balance: pathOr('', ['data', 'content', 'fields', 'balance_x'], data),
    token1Balance: pathOr('', ['data', 'content', 'fields', 'balance_y'], data),
    lpCoinSupply: pathOr(
      '',
      ['data', 'content', 'fields', 'lp_coin_supply', 'fields', 'value'],
      data,
    ),
    lpCoin: pathOr(
      '',
      ['data', 'content', 'fields', 'lp_coin_supply', 'type'],
      data,
    ),
    poolType,
    token0Type,
    token1Type,
    stable,
  };
};
