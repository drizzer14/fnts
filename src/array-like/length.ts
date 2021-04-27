import type { ArrayLike } from './array-like'

export interface LengthFn {
  (string: string): number

  <T extends readonly any[]> (array: T): T['length']

  <T extends any[]> (array: T): number
}

export const length = ((arrayLike: ArrayLike): number => {
  return arrayLike.length
}) as LengthFn
