import type { ArrayLike, ArrayLikeMember } from './array-like';

/**
 * Funtional implementation of `Array.prototype.includes` and `String.prototype.includes`
 * with element as its first argument.
 */
export function includes <A extends ArrayLike>(element: ArrayLikeMember<A>, fromIndex = 0): (arrayLike: A) => boolean {
  return (arrayLike) => arrayLike.includes (element, fromIndex);
}
