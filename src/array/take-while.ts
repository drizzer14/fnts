import { curry2 } from '../.internal/curry-2'

import { foldl } from './foldl'

import type { Predicate } from './array-callback'

export interface TakeWhileFn {
  <T> (predicate: Predicate<T>): (array: T[]) => T[]

  <T> (array: T[], predicate: Predicate<T>): T[]
}

export const takeWhile = curry2(
  <T> (array: T[], predicate: Predicate<T>): T[] => {
    let isSatistied = false

    return foldl<T, T[]>(
      array,
      ((accumulator, current, index, array) => {
        if (predicate(current, index, array)) {
          isSatistied = true

          return accumulator.concat(current)
        }

        if (isSatistied) {
          array.splice(index)
        }

        return accumulator
      }),
      [],
    )
  },
) as TakeWhileFn
