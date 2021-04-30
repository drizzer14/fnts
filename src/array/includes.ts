import { curry2 } from '../.internal/curry-2'
import { curry3 } from '../.internal/curry-3'

export interface ArrayIncludesFromFn {
  <T> (
    element: T,
    fromIndex: number,
  ): (array: unknown[]) => array is T[]

  <T> (
    array: T[],
    element: unknown,
    fromIndex: number,
  ): element is T
}

export const includesFrom = curry3(
  <T> (
    array: T[],
    element: unknown,
    fromIndex: number,
  ): boolean => array.includes(element as T, fromIndex),
) as ArrayIncludesFromFn

export interface ArrayIncludesFn {
  <T> (element: T): (array: unknown[]) => array is T[]

  <T> (array: T[], element: unknown): element is T
}

export const includes = curry2(
  <T> (
    array: T[],
    element: unknown,
  ) => includesFrom(array, element, 0),
  (f1) => !Array.isArray(f1)
) as ArrayIncludesFn
