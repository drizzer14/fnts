import { just, Maybe, nothing } from '../monad/maybe';

/**
 * Funtional implementation of `String.prototype.search`.
 * Wraps the matched value in the `Maybe` monad.
 */
export function search (regexp: string | RegExp): (string: string) => Maybe<number> {
  return (string) => {
    const index = string.search(regexp);

    return index < 0
      ? nothing ()
      : just (index);
  };
};
