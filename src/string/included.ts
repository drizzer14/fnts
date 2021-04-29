import { curry2 } from '../.internal/curry-2'
import { curry3 } from '../.internal/curry-3'

export interface StringIncludedFn {
  (string: string): (substring: string) => boolean

  (substring: string, string: string): boolean
}

export const included = curry2(
  (
    substring: string,
    string: string,
  ): boolean => {
    return string.includes(substring)
  },
) as StringIncludedFn

export interface StringIncludedFromFn {
  (
    string: string,
    fromPosition: number,
  ): (substring: string) => boolean

  (
    substring: string,
    string: string,
    fromPosition: number,
  ): boolean
}

export const includedFrom = curry3(
  (
    substring: string,
    string: string,
    fromPosition: number,
  ): boolean => {
    return string.includes(
      substring,
      fromPosition,
    )
  },
) as StringIncludedFromFn
