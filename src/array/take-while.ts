import { concat } from '../array-like/concat';

import { foldl } from './foldl';
import type { Predicate } from './array-callback';

/**
 * Creates a copy of the original array with elements that satisfy the predicate.
 * Stops on the first false occasion.
 */
export function takeWhile <T>(predicate: Predicate<T>): (array: T[]) => T[] {
  let isSatistied = false;

  return foldl <T, T[]>(
    ((accumulator, current, index, array) => {
      if (predicate (current, index, array)) {
        isSatistied = true;

        return concat (current) (accumulator);
      }

      if (isSatistied) {
        array.splice (index);
      }

      return accumulator;
    }),
    [],
  );
}
