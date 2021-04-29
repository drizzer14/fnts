import { curry2 } from '../.internal/curry-2'
import { curry3 } from '../.internal/curry-3'

export interface ArrayIncludedFn {
  <T> (array: T[]): (element: unknown) => element is T

  <T> (element: T, array: unknown[]): array is T[]
}

export const included = curry2(
  <T> (
    element: unknown,
    array: T[],
  ): boolean => {
    return array.includes(element as T)
  },
) as ArrayIncludedFn

export interface ArrayIncludedFromFn {
  <T> (
    array: T[],
    fromIndex: number,
  ): (element: unknown) => element is T[]

  <T> (
    element: unknown,
    array: T[],
    fromIndex: number,
  ): element is T
}

export const includedFrom = curry3(
  <T> (
    element: unknown,
    array: T[],
    fromIndex: number,
  ): boolean => {
    return array.includes(
      element as T,
      fromIndex,
    )
  },
) as ArrayIncludedFromFn
