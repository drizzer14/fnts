import { curry3 } from '../.internal/curry-3'

export interface StartsWithFn {
  (substring: string, startPosition?: number): (string: string) => boolean

  (string: string, substring: string, startPosition?: number): boolean
}

export const startsWith = curry3(
  (
    string: string,
    substring: string,
    startPosition?: number,
  ): boolean => {
    return string.startsWith(substring, startPosition)
  },
) as StartsWithFn
