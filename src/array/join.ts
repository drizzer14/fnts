import { curry2 } from '../.internal/curry-2'

export interface JoinFn {
  (separator?: string): <T>(array: T[]) => string

  <T> (array: T[], separator?: string): string
}

export const join = curry2(
  <T> (array: T[], separator = ',') => array.join(separator),
) as JoinFn
