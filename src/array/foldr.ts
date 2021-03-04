import type { RightReducer } from './array-callback';

/**
 * Funtional implementation of `Array.prototype.reduceRight`.
 */
export function foldr <T, R = T>(reducer: RightReducer<T, R>, initialValue: R): (array: T[]) => R {
  return (array) => array.reduceRight (
    (accumulator, current, ...rest) => reducer (current, accumulator, ...rest),
    initialValue
  );
}
