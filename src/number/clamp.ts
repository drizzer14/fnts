import { permutationOf3 } from '../.internal/permutation-of-3'

export interface ClampFn {
  (min: number, max: number): (number: number) => number

  (number: number, min: number, max: number): number
}

export const clamp = permutationOf3(
  (number: number, min: number, max: number): number => {
    return Math.max(Math.min(number, max), min)
  },
) as ClampFn
