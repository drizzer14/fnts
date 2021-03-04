import type { Ord } from './ord';

/**
 * Tell if `a` is greater than `b` by value.
 */
export function gtl (a: Ord): (b: Ord) => boolean {
  return (b) => {
    return typeof a === 'string' && typeof b === 'string'
      ? a.localeCompare (b) < 0
      : a > b;
  };
}

/**
 * Tell if `a` is greater than `b` by value.
 */
export function gtr (b: Ord): (a: Ord) => boolean {
  return (a) => gtl (a) (b);
}
