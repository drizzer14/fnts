import type { Predicate } from './array-callback';

/**
 * Funtional implementation of `Array.prototype.some`.
 */
export function some <T>(predicate: Predicate<T>, fromIndex = 0): (array: T[]) => boolean {
  return (array) => array.some (predicate, fromIndex);
}
