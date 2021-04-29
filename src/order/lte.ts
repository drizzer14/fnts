import { curry } from '../function/curry'

import { lt } from './lt'
import type { Ord } from './ord'

export const lte = curry(
  (a: Ord, b: Ord): boolean => {
    return (typeof a === 'string' && typeof b === 'string')
      ? a === b || lt(a)(b)
      : a <= b
  },
)

export const lter = (b: Ord) => (a: Ord): boolean => lte(a, b)
