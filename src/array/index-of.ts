import { just, Maybe, nothing } from '../type/maybe';

export const indexOf = <T>(element: T, fromIndex?: number) => (array: T[]): Maybe<number> => {
  const index = array.indexOf(element, fromIndex);

  return index >= 0
    ? just(index)
    : nothing();
};
