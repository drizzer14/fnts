import { curry } from '../function/curry'

export const exp = curry(
  (x: number, p: number): number => x ** p,
)

export const expTo = (p: number) => (x: number): number => exp(x, p)
