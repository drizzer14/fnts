import { just, Maybe, nothing } from '../type/maybe';

export const search = (regexp: string | RegExp) => (string: string): Maybe<number> => {
  const index = string.search(regexp);

  return index < 0
    ? nothing()
    : just(index);
};
