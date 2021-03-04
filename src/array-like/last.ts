import { at } from './at';
import type { ArrayLike, ArrayLikeMember } from './array-like';

export type Last<T extends any[]> = T[T extends [...infer H, any]
  ? H extends { length: infer L }
    ? L
    : number
  : never];

/**
 * Gets the last element of the array.
 */
export function last <T>(array: T[]): T;

/**
 * Gets the last character of the string.
 */
export function last (string: string): string;

export function last <A extends ArrayLike>(arrayLike: A): ArrayLikeMember<A> {
  return at (-1) (arrayLike as any) as ArrayLikeMember<A>;
}
