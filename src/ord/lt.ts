import { permutationOf2 } from '../.internal/permutation-of-2'

import type { Ord } from './ord'
import type { Comparator } from './comparator'

export const lt = permutationOf2(
  (a: Ord, b: Ord): boolean => {
    return typeof a === 'string' && typeof b === 'string'
      ? a.localeCompare(b) > 0
      : a < b
  },
) as Comparator
