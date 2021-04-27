import { curry } from '../function/curry'

export const mod = curry(
  (x: number, m: number): number => x % m,
)

export const modOf = (m: number) => (x: number): number => mod(x, m)
