import type { Transformer } from './array-callback';

/**
 * Funtional implementation of `Array.prototype.map`.
 */
export function map <T, R>(transformer: Transformer<T, R>): (array: T[]) => R[] {
  return (array) => array.map (transformer);
}
