import { just, Maybe, nothing } from '../type/maybe';

import type { Predicate } from './array-callback';

export const findIndex = <T>(predicate: Predicate<T>) => (array: T[]): Maybe<number> => {
  let result: Maybe<number> = nothing();

  for (let index = 0; index < array.length; index += 1) {
    if (predicate(array[index], index, array)) {
      result = just(index);

      break;
    }
  }

  return result;
};
