import { curry2 } from '../.internal/curry-2'

import type { Transformer } from './array-callback'

export interface FlatMapFn {
  <T, R> (transformer: Transformer<T, R>): (array: T[]) => R[]

  <T, R> (array: T[], transformer: Transformer<T, R>): R[]
}

export const flatMap = curry2(
  <T, R> (
    array: T[],
    transformer: Transformer<T, R>,
  ) => array.flatMap(transformer as any),
) as FlatMapFn
