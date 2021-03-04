import type { ArrayLike } from './array-like';

/**
 * Gets the length of the array.
 */
export function length (array: any[]): number;

/**
 * Gets the length of the string.
 */
export function length (string: string): number;

export function length (arrayLike: ArrayLike): number {
  return arrayLike.length;
}
