import { curry } from '../function/curry'

export const mul = curry(
  (a: number, b: number): number => a * b,
)
