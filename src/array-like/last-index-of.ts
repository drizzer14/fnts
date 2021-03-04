import { just, Maybe, nothing } from '../monad/maybe';

import type { ArrayLike, ArrayLikeMember } from './array-like';

/**
 * Funtional implementation of `Array.prototype.lastIndexOf` and `String.prototype.lastIndexOf`.
 */
export function lastIndexOf <A extends ArrayLike>(element: ArrayLikeMember<A>, fromIndex?: number): (arrayLike: A) => Maybe<number> {
  return (arrayLike) => {
    const index = arrayLike.lastIndexOf (element, fromIndex ?? arrayLike.length);

    return index < 0
      ? nothing ()
      : just (index);
  };
}
