import { Maybe, just, nothing } from '../monad/maybe';

import type { ArrayLike, ArrayLikeMember } from './array-like';

/**
 * Funtional implementation of `Array.prototype.indexOf` and `String.prototype.indexOf`.
 */
export function indexOf <A extends ArrayLike>(element: ArrayLikeMember<A>, fromIndex?: number): (arrayLike: A) => Maybe<number> {
  return (arrayLike) => {
    const index = arrayLike.indexOf (element, fromIndex);

    return index < 0
      ? nothing ()
      : just (index);
  };
}
