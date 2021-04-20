import type { Ord } from './ord';

/**
 * Tell if `a` is less than `b` by value.
 */
export function lt (a: Ord): (b: Ord) => boolean {
  return (b) => {
    return typeof a === 'string' && typeof b === 'string'
      ? a.localeCompare (b) > 0
      : a < b;
  };
}

/**
 * Tell if `a` is less than `b` by value.
 */
export function ltr (b: Ord): (a: Ord) => boolean {
  return (a) => lt (a) (b);
}
