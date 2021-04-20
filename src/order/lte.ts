import { lt } from './lt';
import type { Ord } from './ord';

/**
 * Tell if `a` is less than or equals `b` by value.
 */
export function lte (a: Ord): (b: Ord) => boolean {
  return (b) => {
    return (typeof a === 'string' && typeof b === 'string')
      ? a === b || lt (a) (b)
      : a <= b;
  };
}

/**
 * Tell if `a` is less than or equals `b` by value.
 */
export function lter (b: Ord): (a: Ord) => boolean {
  return (a) => lt (a) (b);
}
