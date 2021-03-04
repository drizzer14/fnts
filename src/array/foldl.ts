import type { LeftReducer } from './array-callback';

/**
 * Funtional implementation of `Array.prototype.reduce`.
 */
export function foldl <T, R = T>(reducer: LeftReducer<T, R>, initialValue: R): (array: T[]) => R {
  return (array) => array.reduce (reducer, initialValue);
}
