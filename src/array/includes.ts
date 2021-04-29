import { curry3 } from '../.internal/curry-3'

export interface ArrayIncludesFn {
  <T> (element: T): (array: unknown[]) => array is T[]

  <T> (array: T[], element: unknown): element is T
}

export const includes = (<T> (
  f1: T[] | unknown,
  element: unknown,
) => {
  return Array.isArray(f1)
    ? f1.includes(element)
    : (f2: T[]) => includes(f2, f1)
}) as ArrayIncludesFn

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
  ): boolean => {
    return array.includes(
      element as T,
      fromIndex,
    )
  },
) as ArrayIncludesFromFn
