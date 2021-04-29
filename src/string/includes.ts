import { curry2 } from '../.internal/curry-2'
import { curry3 } from '../.internal/curry-3'

export interface StringIncludesFn {
  (substring: string): (string: string) => boolean

  (string: string, substring: string): boolean
}

export const includes = curry2(
  (
    string: string,
    substring: string,
  ): boolean => {
    return string.includes(substring)
  },
) as StringIncludesFn

export interface StringIncludesFromFn {
  (
    substring: string,
    fromPosition: number,
  ): (string: string) => boolean

  (
    string: string,
    substring: string,
    fromPosition: number,
  ): boolean
}

export const includesFrom = curry3(
  (
    string: string,
    substring: string,
    fromPosition: number,
  ): boolean => {
    return string.includes(
      substring,
      fromPosition,
    )
  },
) as StringIncludesFromFn
