import { slice } from './slice';
import type { ArrayLike } from './array-like';

/**
 * Gets specified amount of array-like elements from the left.
 */
export function takel (amount: number): <A extends ArrayLike>(arrayLike: A) => A {
  return slice (0, amount);
}
