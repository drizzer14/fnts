import { curry2 } from '../.internal/curry-2'
import { curry3 } from '../.internal/curry-3'

export interface PadStartWithFn {
  (
    maxLength: number,
    padString: string,
  ): (string: string) => string

  (
    string: string,
    maxLength: number,
    padString: string,
  ): string
}

export const padStartWith = curry3(
  (
    string: string,
    maxLength: number,
    padString: string,
  ): string => string.padStart(maxLength, padString),
) as PadStartWithFn

export interface PadStartFn {
  (maxLength: number): (string: string) => string

  (string: string, maxLength: number): string
}

export const padStart = curry2(
  (
    string: string,
    maxLength: number,
  ): string => padStartWith(string, maxLength, ''),
) as PadStartFn
