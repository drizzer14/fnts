import type { Transformer } from './array-callback';

/**
 * Funtional implementation of `Array.prototype.flatMap`.
 */
export function flatMap <T, R>(transformer: Transformer<T, R>): (array: T[]) => R[] {
  return (array) => array.flatMap (transformer);
}
