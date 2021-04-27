import { curry3 } from '../.internal/curry-3'

export interface PadStartFn {
  (maxLength: number, padString?: string): (string: string) => string

  (string: string, maxLength: number, padString?: string): string
}

export const padStart = curry3(
  (
    string: string,
    maxLength: number,
    padString?: string,
  ): string => {
    return string.padStart(maxLength, padString)
  },
) as PadStartFn
