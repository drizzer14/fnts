import { offset } from '../number';

import { splice } from './splice';

export const slice = (start = 0, end?: number) => <T>(array: T[]): T[] => {
  const lengthOffset = offset(array.length);

  const from = lengthOffset(start);
  const to = lengthOffset(end ?? array.length);

  if (start < 0) {
    return splice(from, end === undefined ? array.length : to)(array);
  }

  const result: T[] = [];

  for (let index = from; index < to; index += 1) {
    result.push(array[index]);
  }

  return result;
};
