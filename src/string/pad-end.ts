import { curry3 } from '../.internal/curry-3'

export interface PadEndFn {
  (maxLength: number, padString?: string): (string: string) => string

  (string: string, maxLength: number, padString?: string): string
}

export const padEnd = curry3(
  (
    string: string,
    maxLength: number,
    padString?: string,
  ): string => {
    return string.padEnd(maxLength, padString)
  },
) as PadEndFn
