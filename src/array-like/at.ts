import { offset } from '../number/offset';

import type { ArrayLike, ArrayLikeMember } from './array-like';

/**
 * Gets an array or string element by its position.
 * Supports negative indices.
 */
export function at (position: number): <A extends ArrayLike>(arrayLike: A) => ArrayLikeMember<A> {
  return (arrayLike) => arrayLike[offset (position) (arrayLike.length)];
}
