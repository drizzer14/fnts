import type { Predicate } from './array-callback';

export const filter = <T>(predicate: Predicate<T>) => (array: T[]): T[] => {
  const result: T[] = [];

  for (let index = 0; index < array.length; index += 1) {
    const current = array[index];

    if (predicate(current, index, array)) {
      result.push(current);
    }
  }

  return result;
};
