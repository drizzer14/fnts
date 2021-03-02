import { just, Maybe, nothing } from '../type/maybe';

import type { Predicate } from './array-callback';

export const findl = <T>(predicate: Predicate<T>) => (array: T[]): Maybe<T> => {
  let accumulator: Maybe<T> = nothing();

  for (let index = 0; index < array.length; index += 1) {
    const current = array[index];

    if (predicate(current, index, array)) {
      accumulator = just(current);

      break;
    }
  }

  return accumulator;
};
