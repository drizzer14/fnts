import { curry } from '../function/curry'

import { gt } from './gt'
import type { Ord } from './ord'

/**
 * Tell if `a` is greater than or equals `b` by value.
 */
export const gte = curry(
  (a: Ord, b: Ord): boolean => {
    return (typeof a === 'string' && typeof b === 'string')
      ? a === b || gt(a)(b)
      : a >= b
  },
)

/**
 * Tell if `a` is greater than or equals `b` by value.
 */
export const gter = (b: Ord) => (a: Ord): boolean => gte(a, b)
