import { maybe, Maybe } from '../type/maybe';

export const match = (regexp: string | RegExp) => (string: string): Maybe<RegExpMatchArray> => {
  return maybe(string.match(regexp));
}
