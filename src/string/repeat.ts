import { curry2 } from '../.internal/curry-2'

export interface RepeatFn {
  (count: number): (string: string) => string

  (string: string, count: number): string
}

export const repeat = curry2(
  (string: string, count: number): string => string.repeat(count),
) as RepeatFn
