import { just, Maybe, nothing } from '../monad/maybe';

import type { Predicate } from './array-callback';

/**
 * Funtional implementation of `Array.prototype.findIndex`.
 */
export function findIndex <T>(predicate: Predicate<T>): (array: T[]) => Maybe<number> {
  return (array) => {
    const index = array.findIndex (predicate);

    return index < 0
      ? nothing ()
      : just (index);
  };
}
