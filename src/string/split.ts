import { curry3 } from '../.internal/curry-3'

export interface Split {
  (separator?: string, limit?: number): (string: string) => string[]

  (string: string, separator?: string, limit?: number): string[]
}

export const split = curry3(
  (string: string, separator = '', limit?: number): string[] => {
    return string.split(separator, limit)
  },
) as Split
