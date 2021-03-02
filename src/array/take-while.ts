import { flatl } from './flatl';
import { concat } from './concat';
import type { Predicate } from './array-callback';

export const takeWhile = <T>(predicate: Predicate<T>) => (array: T[]): T[] => {
  let isSatistied = false;

  return flatl<T, T[]>(
    ((accumulator, current, index, array) => {
      if (predicate(current, index, array)) {
        isSatistied = true;

        return concat(current)(accumulator);
      }

      if (isSatistied) {
        array.splice(index);
      }

      return accumulator;
    }),
    [],
  )(array);
};
