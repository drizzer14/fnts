import { curry2 } from '../.internal/curry-2'
import { maybe, Maybe } from '../monad/maybe'

import type { Predicate } from './array-callback'

export interface FindlFn {
  <T> (predicate: Predicate<T>): (array: T[]) => Maybe<T>

  <T> (array: T[], predicate: Predicate<T>): Maybe<T>
}

export const findl = curry2(
  <T> (array: T[], predicate: Predicate<T>) => maybe(array.find(predicate)),
) as FindlFn
