import type { Predicate } from './array-callback';

/**
 * Funtional implementation of `Array.prototype.every`.
 */
export function every <T>(predicate: Predicate<T>): (array: T[]) => boolean {
  return (array) => array.every (predicate);
}
