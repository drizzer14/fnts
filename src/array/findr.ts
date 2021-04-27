import { curry2 } from '../.internal/curry-2'
import { just, Maybe, nothing } from '../monad/maybe'

import type { Predicate } from './array-callback'

export interface FindrFn {
  <T> (predicate: Predicate<T>): (array: T[]) => Maybe<T>

  <T> (array: T[], predicate: Predicate<T>): Maybe<T>
}

export const findr = curry2(
  <T> (array: T[], predicate: Predicate<T>) => {
    let accumulator: Maybe<T> = nothing()

    for (let index = array.length - 1; index >= 0; index -= 1) {
      const current = array[index]

      if (predicate(current, index, array)) {
        accumulator = just(current)

        break
      }
    }

    return accumulator
  },
) as FindrFn
