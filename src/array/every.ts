import type { Predicate } from './array-callback';

export const every = <T>(predicate: Predicate<T>) => (array: T[]): boolean => {
  let result = true;

  for (let index = 0; index < array.length; index += 1) {
    if (!predicate(array[index], index, array)) {
      result = false;

      break;
    }
  }

  return result;
};
