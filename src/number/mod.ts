import { permutationOf2 } from '../.internal/permutation-of-2'

export interface ModFn {
  (divisor: number): (dividend: number) => number

  (dividend: number, divisor: number): number
}

export const mod = permutationOf2(
  (dividend: number, divisor: number): number => dividend % divisor,
) as ModFn
