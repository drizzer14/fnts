import { slice } from './slice';
import type { ArrayLike, ArrayLikeMember } from './array-like';

/**
 * Gets all elements of the tuple except for the first.
 */
export function tail <T extends ReadonlyArray<any>>(tuple: T): ((...args: T) => any) extends ((_: any, ..._1: infer Rest) => any)
  ? Rest
  : T;

/**
 * Gets all elements of the array except for the first.
 */
export function tail <T>(array: T[]): T[];

/**
 * Gets all characters of the string except for the first.
 */
export function tail (string: string): string;

export function tail <A extends ArrayLike>(arrayLike: A): ArrayLikeMember<A> {
  return slice (1) (arrayLike as any[]) as ArrayLikeMember<A>;
}
