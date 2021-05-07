import { permutationOf2 } from '../.internal/permutation-of-2'

import { gt } from './gt'
import type { Ord } from './ord'
import type { Comparator } from './comparator'

export const gte = permutationOf2(
  (a: Ord, b: Ord): boolean => {
    return (typeof a === 'string' && typeof b === 'string')
      ? a === b || gt(a, b)
      : a >= b
  },
) as Comparator
