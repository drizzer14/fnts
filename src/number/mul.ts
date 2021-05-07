import { curry } from '../function/curry'

export const mul = curry(
  (
    multiplicand: number,
    multiplier: number
  ): number => multiplicand * multiplier,
)
