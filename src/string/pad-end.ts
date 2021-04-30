import { curry2 } from '../.internal/curry-2'
import { curry3 } from '../.internal/curry-3'

export interface PadEndWithFn {
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

export const padEndWith = curry3(
  (
    string: string,
    maxLength: number,
    padString: string,
  ): string => string.padEnd(maxLength, padString),
) as PadEndWithFn

export interface PadEndFn {
  (maxLength: number): (string: string) => string

  (string: string, maxLength: number): string
}

export const padEnd = curry2(
  (
    string: string,
    maxLength: number,
  ): string => padEndWith(string, maxLength, ''),
) as PadEndFn
