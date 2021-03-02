import type { Transformer } from './array-callback';

export const map = <T, R>(transformer: Transformer<T, R>) => (array: T[]) => {
  const result: R[] = [];

  for (let index = 0; index < array.length; index += 1) {
    result.push(transformer(array[index], index, array));
  }

  return result;
}
