import { just, Maybe, nothing } from '../type/maybe';

import type { Predicate } from './array-callback';

export const findr = <T>(predicate: Predicate<T>) => (array: T[]): Maybe<T> => {
  let accumulator: Maybe<T> = nothing();

  for (let index = array.length - 1; index >= 0; index -= 1) {
    const current = array[index];

    if (predicate(current, index, array)) {
      accumulator = just(current);

      break;
    }
  }

  return accumulator;
};
