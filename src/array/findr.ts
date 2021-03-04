import { just, Maybe, nothing } from '../monad/maybe';

import type { Predicate } from './array-callback';

/**
 * Funtional implementation of `Array.prototype.find` from the right side.
 */
export function findr <T>(predicate: Predicate<T>): (array: T[]) => Maybe<T> {
  return (array) => {
    let accumulator: Maybe<T> = nothing ();

    for (let index = array.length - 1; index >= 0; index -= 1) {
      const current = array[index];

      if (predicate (current, index, array)) {
        accumulator = just (current);

        break;
      }
    }

    return accumulator;
  };
}
