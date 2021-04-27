import { curry3 } from '../.internal/curry-3'

import type { LeftReducer } from './array-callback'

export interface FoldlFn {
  <T, R = T> (reducer: LeftReducer<T, R>, initialValue: R): (array: T[]) => R

  <T, R = T> (array: T[], reducer: LeftReducer<T, R>, initialValue: R): R
}

export const foldl = curry3(
  <T, R = T> (
    array: T[],
    reducer: LeftReducer<T, R>,
    initialValue: R,
  ) => array.reduce(reducer, initialValue),
) as FoldlFn
