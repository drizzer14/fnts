import { just, Maybe, nothing } from '../type/maybe';

export const lastIndexOf = <T>(element: T, fromIndex?: number) => (array: T[]): Maybe<number> => {
  const lastIndex = array.lastIndexOf(element, fromIndex ?? array.length);

  return lastIndex < 0
    ? nothing()
    : just(lastIndex);
};
