import { curry2 } from '../.internal/curry-2'

import type { Predicate } from './array-callback'

export interface EveryFn {
  <T> (predicate: Predicate<T>): (array: T[]) => boolean

  <T> (array: T[], predicate: Predicate<T>): boolean
}

export const every = curry2(
  <T> (array: T[], predicate: Predicate<T>) => array.every(predicate),
) as EveryFn
