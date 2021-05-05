import { curry2 } from '../.internal/curry-2'

import type { Transformer } from './array-callback'

export interface MapFn {
  <T, R = T> (transformer: Transformer<T, R>): (array: T[]) => R[]

  <T, R = T> (array: T[], transformer: Transformer<T, R>): R[]
}

export const map = curry2(
  <T, R> (
    array: T[],
    transformer: Transformer<T, R>,
  ) => array.map(transformer as any),
) as MapFn
