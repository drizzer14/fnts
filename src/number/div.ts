import { curry } from '../function/curry'

export const div = curry(
  (a: number, b: number): number => a / b,
)

export const divBy = (b: number) => (a: number): number => div(a, b)
