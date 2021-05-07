import { curry } from '../function/curry'

export const add = curry(
  (augend: number, addend: number): number => augend + addend,
)
