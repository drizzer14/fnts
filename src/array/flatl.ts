import type { LeftReducer } from './array-callback';

export const flatl = <T, R = T>(reducer: LeftReducer<T, R>, initialValue: R) => (array: T[]): R => {
  let accumulator = initialValue;

  for (let index = 0; index < array.length; index += 1) {
    accumulator = reducer(accumulator, array[index], index, array);
  }

  return accumulator;
};
