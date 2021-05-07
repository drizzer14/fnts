import { permutationOf2 } from '../.internal/permutation-of-2'

export interface ExpFn {
  (power: number): (base: number) => number

  (base: number, power: number): number
}

export const exp = permutationOf2(
  (base: number, power: number): number => base ** power,
) as ExpFn
