import { neg } from '../number/neg';

import { slice } from './slice';
import type { ArrayLike } from './array-like';

/**
 * Gets specified amount of array-like elements from the right.
 */
export function taker (amount: number): <A extends ArrayLike>(arrayLike: A) => A {
  return (arrayLike) => slice (neg (amount), arrayLike.length) (arrayLike as any);
}
