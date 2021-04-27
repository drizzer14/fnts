import { curry3 } from '../.internal/curry-3'

export interface EndsWithFn {
  (substring: string, endPosition?: number): (string: string) => boolean

  (string: string, substring: string, endPosition?: number): boolean
}

export const endsWith = curry3(
  (
    string: string,
    substring: string,
    endPosition?: number,
  ): boolean => {
    return string.endsWith(substring, endPosition)
  },
) as EndsWithFn
