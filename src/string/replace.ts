import { curry3 } from '../.internal/curry-3'

export type Replacer = (substring: string) => string

export interface ReplaceFn {
  (
    searchValue: string | RegExp,
    replaceValue: string,
  ): (string: string) => string

  (
    searchValue: string | RegExp,
    replacer: Replacer,
  ): (string: string) => string

  (
    string: string,
    searchValue: string | RegExp,
    replaceValue: string,
  ): string

  (
    string: string,
    searchValue: string | RegExp,
    replacer: Replacer,
  ): string
}

export const replace = curry3(
  (
    string: string,
    searchValue: string | RegExp,
    replaceValue: Replacer | string,
  ): string => {
    return string.replace(searchValue, replaceValue as string)
  },
) as ReplaceFn
