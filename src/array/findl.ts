import { maybe, Maybe } from '../monad/maybe';

import type { Predicate } from './array-callback';

/**
 * Funtional implementation of `Array.prototype.find` from the left side.
 */
export function findl <T>(predicate: Predicate<T>): (array: T[]) => Maybe<T> {
  return (array) => maybe (array.find (predicate));
}
