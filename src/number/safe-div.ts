import { permutationOf2 } from '../.internal/permutation-of-2'

import { div, DivFn } from './div'

export const safeDiv = permutationOf2(
  (
    dividend: number,
    divisor: number
  ): number => div(dividend, divisor || 1),
) as DivFn
