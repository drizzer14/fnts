import { curry3 } from '../.internal/curry-3'

import type { RightReducer } from './array-callback'

export interface FoldrFn {
  <T, R = T> (reducer: RightReducer<T, R>, initialValue: R): (array: T[]) => R

  <T, R = T> (array: T[], reducer: RightReducer<T, R>, initialValue: R): R
}

export const foldr = curry3(
  <T, R = T> (
    array: T[],
    reducer: RightReducer<T, R>,
    initialValue: R,
  ) => array.reduceRight(
    (accumulator, current, ...rest) => reducer(current, accumulator, ...rest),
    initialValue,
  ),
) as FoldrFn
