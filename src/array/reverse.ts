import { flatr } from './flatr';
import { concat } from './concat';

export const reverse = <T>(array: T[]): T[] => {
  return flatr<T, T[]>(
    (current, accumulator) => concat(current)(accumulator),
    []
  )(array);
};
