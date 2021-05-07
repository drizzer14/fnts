import { permutationOf2 } from '../.internal/permutation-of-2'

import { lt } from './lt'
import type { Ord } from './ord'
import type { Comparator } from './comparator'

export const lte = permutationOf2(
  (a: Ord, b: Ord): boolean => {
    return (typeof a === 'string' && typeof b === 'string')
      ? a === b || lt(a, b)
      : a <= b
  },
) as Comparator
