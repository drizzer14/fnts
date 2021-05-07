import { permutationOf2 } from '../.internal/permutation-of-2'

export interface SubtFn {
  (subtrahend: number): (minuend: number) => number

  (minuend: number, subtrahend: number): number
}

export const subt = permutationOf2(
  (minuend: number, subtrahend: number): number => minuend - subtrahend,
) as SubtFn
