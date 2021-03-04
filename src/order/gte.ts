import { gtl } from './gt';
import type { Ord } from './ord';

/**
 * Tell if `a` is greater than or equals `b` by value.
 */
export function gtel (a: Ord): (b: Ord) => boolean {
  return (b) => {
    return (typeof a === 'string' && typeof b === 'string')
      ? a === b || gtl (a) (b)
      : a >= b;
  };
}

/**
 * Tell if `a` is greater than or equals `b` by value.
 */
export function gter (b: Ord): (a: Ord) => boolean {
  return (a) => gtel (a) (b);
}
