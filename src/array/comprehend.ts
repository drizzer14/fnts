import { curry3 } from '../.internal/curry-3'
import { compose } from '../function/compose'

import { map } from './map'
import { filter } from './filter'
import type { Predicate, Transformer } from './array-callback'

export interface ComprehendFn {
  <T, R = T> (
    transformer: Transformer<T, R>,
    predicate: Predicate<T>,
  ): (array: T[]) => R[]

  <T, R = T> (
    array: T[],
    transformer: Transformer<T, R>,
    predicate: Predicate<T>,
  ): R[]
}

export const comprehend = curry3(
  <T, R = T> (
    array: T[],
    transformer: Transformer<T, R>,
    predicate: Predicate<T>,
  ) => {
    return compose(
      map(transformer),
      filter(predicate),
    )(array)
  },
) as ComprehendFn
