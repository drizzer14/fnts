type Replacer = (substring: string) => string;

export function replace (searchValue: string | RegExp, replaceValue: string): (string: string) => string;

export function replace (searchValue: string | RegExp, replacer: Replacer): (string: string) => string;

/**
 * Funtional implementation of `String.prototype.replace`.
 */
export function replace (searchValue: string | RegExp, replaceValue: Replacer | string): (string: string) => string {
  return (string) => string.replace (searchValue, replaceValue as string);
}
