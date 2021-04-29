import { curry2 } from '../.internal/curry-2'
import { curry3 } from '../.internal/curry-3'

import type { ArrayLike } from './array-like'

export interface SliceToFn {
  (start: number, end: number): <A extends ArrayLike> (array: A) => A

  <A extends ArrayLike> (array: A, start: number, end: number): A
}

export const sliceTo = curry3(
  <A extends ArrayLike> (
    arrayLike: A,
    start: number,
    end: number,
  ): A => {
    return arrayLike.slice(start, end) as A
  },
) as SliceToFn

export interface SliceFn {
  (start: number): <A extends ArrayLike> (array: A) => A

  <A extends ArrayLike> (array: A, start: number): A
}

export const slice = curry2(
  <A extends ArrayLike> (
    arrayLike: A,
    start: number,
  ): A => {
    return sliceTo(arrayLike, start, arrayLike.length)
  },
) as SliceFn
