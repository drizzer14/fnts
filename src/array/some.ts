import { curry2 } from '../.internal/curry-2'
import { curry3 } from '../.internal/curry-3'

import type { Predicate } from './array-callback'

export interface SomeFromFn {
  <T> (
    predicate: Predicate<T>,
    fromIndex: number,
  ): (array: T[]) => boolean

  <T> (
    array: T[],
    predicate: Predicate<T>,
    fromIndex: number,
  ): boolean
}

export const someFrom = curry3(
  <T> (
    array: T[],
    predicate: Predicate<T>,
    fromIndex: number,
  ): boolean => array.some(predicate, fromIndex),
) as SomeFromFn

export interface SomeFn {
  <T> (predicate: Predicate<T>): (array: T[]) => boolean

  <T> (array: T[], predicate: Predicate<T>): boolean
}

export const some = curry2(
  <T> (
    array: T[],
    predicate: Predicate<T>,
  ): boolean => someFrom(array, predicate, 0),
) as SomeFn
