/**
 * Funtional implementation of `Array.prototype.slice`.
 */
import type { ArrayLike, ArrayLikeMember } from './array-like';

export function slice (start?: number, end?: number): <T>(array: T[]) => T[];

/**
 * Funtional implementation of `String.prototype.slice`.
 */
export function slice (start?: number, end?: number): (string: string) => string;

export function slice (start = 0, end?: number): <A extends ArrayLike>(arrayLike: A) => ArrayLikeMember<A> {
  return (arrayLike) => arrayLike.slice (start, end);
}
