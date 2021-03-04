/**
 * Gets the first element of the tuple.
 */
import type { ArrayLike, ArrayLikeMember } from './array-like';

export function head <T extends ReadonlyArray<any>>(tuple: T): T[0];

/**
 * Gets the first element of the array.
 */
export function head <T>(array: T[]): T;

/**
 * Gets the first character of the string.
 */
export function head (string: string): string;

export function head <A extends ArrayLike>([h]: A): ArrayLikeMember<A> {
  return h;
}
