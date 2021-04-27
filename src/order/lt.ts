import { curry } from '../function/curry'

import type { Ord } from './ord'

export const lt = curry(
  (a: Ord, b: Ord): boolean => {
    return typeof a === 'string' && typeof b === 'string'
      ? a.localeCompare(b) > 0
      : a < b
  },
)

export const ltr = (b: Ord) => (a: Ord): boolean => lt(a, b)
