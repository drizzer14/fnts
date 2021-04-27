import { curry3 } from '../.internal/curry-3'

import type { ArrayLike } from './array-like'

export interface SliceFn {
  (start?: number, end?: number): (string: string) => string

  (start?: number, end?: number): <T>(array: T[]) => T[]

  <T> (array: T[], start?: number, end?: number): T[]

  (string: string, start?: number, end?: number): string
}

export const slice = curry3(
  <A extends ArrayLike> (
    arrayLike: A,
    start?: number,
    end?: number,
  ): A => {
    return arrayLike.slice(start, end) as A
  },
) as SliceFn
