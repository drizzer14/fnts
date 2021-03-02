import type { Predicate } from './array-callback';

export const some = <T>(predicate: Predicate<T>, fromIndex = 0) => (array: T[]) => {
  let result = false;

  for (let index = fromIndex; index < array.length; index += 1) {
    if (predicate(array[index], index, array)) {
      result = true;

      break;
    }
  }

  return result;
};
