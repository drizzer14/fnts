import { curry } from '../function/curry'

export const subt = curry(
  (a: number, b: number): number => a - b,
)

export const subtOf = (b: number) => (a: number): number => subt(a, b)
