import { curry2 } from '../.internal/curry-2'
import { curry3 } from '../.internal/curry-3'

export interface StartsWithFn {
  (substring: string): (string: string) => boolean

  (string: string, substring: string): boolean
}

export const startsWith = curry2(
  (
    string: string,
    substring: string,
  ): boolean => {
    return string.startsWith(substring)
  },
) as StartsWithFn

export interface StartsWithFromFn {
  (substring: string, startPosition: number): (string: string) => boolean

  (string: string, substring: string, startPosition: number): boolean
}

export const startsWithFrom = curry3(
  (
    string: string,
    substring: string,
    startPosition?: number,
  ): boolean => {
    return string.startsWith(substring, startPosition)
  },
) as StartsWithFromFn
