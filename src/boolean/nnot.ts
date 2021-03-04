import { included } from '../array-like/included';

import { not } from './not';

/**
 * Functional implementation of the `!` operator on nullable values.
 */
export const nnot = <T>(x: T): boolean => {
  if (included ([0, '']) (x)) {
    return false;
  }

  return not (x);
}
