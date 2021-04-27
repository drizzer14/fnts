import { curry } from '../function/curry'

import type { Ord } from './ord'

export const gt = curry(
  (a: Ord, b: Ord): boolean => {
    return typeof a === 'string' && typeof b === 'string'
      ? a.localeCompare(b) < 0
      : a > b
  },
)

export const gtr = (b: Ord) => (a: Ord): boolean => gt(a, b)
