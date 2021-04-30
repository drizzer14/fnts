import { curry2 } from '../.internal/curry-2'
import { curry3 } from '../.internal/curry-3'

export interface StartsWithFromFn {
  (
    substring: string,
    endPosition: number,
  ): (string: string) => boolean

  (
    string: string,
    substring: string,
    endPosition: number,
  ): boolean
}

export const startsWithFrom = curry3(
  (
    string: string,
    substring: string,
    endPosition: number,
  ): boolean => string.startsWith(substring, endPosition),
) as StartsWithFromFn

export interface StartsWithFn {
  (substring: string): (string: string) => boolean

  (string: string, substring: string): boolean
}

export const startsWith = curry2(
  (
    string: string,
    substring: string,
  ): boolean => startsWithFrom(string, substring, string.length),
) as StartsWithFn
