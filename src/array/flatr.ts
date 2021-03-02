import type { RightReducer } from './array-callback';

export const flatr = <T, R = T>(reducer: RightReducer<T, R>, initialValue: R) => (array: T[]): R => {
  let accumulator = initialValue;

  for (let index = array.length - 1; index >= 0; index -= 1) {
    accumulator = reducer(array[index], accumulator, index, array);
  }

  return accumulator;
};
