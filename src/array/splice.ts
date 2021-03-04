import { slice } from '../array-like/slice';

/**
 * Immutable funtional implementation of `Array.prototype.splice`.
 */
export function splice (start: number, count = 1): <T>(array: T[]) => T[] {
  return slice (start, start + count);
}
