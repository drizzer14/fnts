import { join } from '../array/join';
import { foldr } from '../array/foldr';
import { split } from '../string/split';
import { compose } from '../function/compose';

import { concat } from './concat';
import { ArrayLike, ArrayLikeMember } from './array-like';

/**
 * Creates a reversed copy of the original array.
 */
export function flip <T>(array: T[]): T[];

/**
 * Creates a reversed copy of the original string.
 */
export function flip (string: string): string;

export function flip <A extends ArrayLike>(arrayLike: A): A {
  if (typeof arrayLike === 'string') {
    return compose (join (''), flip, split ('')) (arrayLike) as any;
  }

  return foldr <ArrayLikeMember<A>, A>(
    // @ts-ignore
    (current, accumulator) => concat (current) (accumulator),
    []
  ) (arrayLike as any[]);
}
