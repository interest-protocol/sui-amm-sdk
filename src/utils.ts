import { DevInspectResults } from '@mysten/sui.js';
import { head, propOr } from 'ramda';
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
