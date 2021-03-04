import type { Predicate } from './array-callback';

/**
 * Funtional implementation of `Array.prototype.filter`.
 */
export function filter <T>(predicate: Predicate<T>): (array: T[]) => T[] {
  return (array) => array.filter (predicate);
}
