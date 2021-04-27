import { curry } from '../function/curry'

import { lt } from './lt'
import type { Ord } from './ord'

/**
 * Tell if `a` is greater than or equals `b` by value.
 */
export const lte = curry(
  (a: Ord, b: Ord): boolean => {
    return (typeof a === 'string' && typeof b === 'string')
      ? a === b || lt(a)(b)
      : a <= b
  },
)

/**
 * Tell if `a` is greater than or equals `b` by value.
 */
export const lter = (b: Ord) => (a: Ord): boolean => lte(a, b)
