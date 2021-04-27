import { curry2 } from '../.internal/curry-2'
import { just, Maybe, nothing } from '../monad/maybe'

import type { Predicate } from './array-callback'

export interface FindIndexFn {
  <T> (predicate: Predicate<T>): (array: T[]) => Maybe<number>

  <T> (array: T[], predicate: Predicate<T>): Maybe<number>
}

export const findIndex = curry2(
  <T> (array: T[], predicate: Predicate<T>) => {
    const index = array.findIndex(predicate)

    return index < 0
      ? nothing()
      : just(index)
  },
) as FindIndexFn
