import type { ArrayLike, ArrayLikeMember } from './array-like';

/**
 * Funtional implementation of `Array.prototype.includes` with array as its first argument.
 */
export function included <T>(array: T[]): (element: unknown, fromIndex?: number) => boolean;

/**
 * Funtional implementation of `String.prototype.includes` with the string as the first argument.
 */
export function included (string: string): (substring: string, fromPosition?: number) => boolean;

export function included <A extends ArrayLike>(arrayLike: A): (element: ArrayLikeMember<A>, fromIndex?: number) => boolean {
  return (element, fromIndex = 0) => arrayLike.includes (element, fromIndex);
}
