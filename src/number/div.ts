import { permutationOf2 } from '../.internal/permutation-of-2'

export interface DivFn {
  (divisor: number): (dividend: number) => number

  (dividend: number, divisor: number): number
}

export const div = permutationOf2(
  (dividend: number, divisor: number): number => dividend / divisor,
) as DivFn
