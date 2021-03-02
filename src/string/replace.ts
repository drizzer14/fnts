export interface Replace {
  (searchValue: string | RegExp, replaceValue: string): (string: string) => string;
  (searchValue: string | RegExp, replacer: (substring: string) => string): (string: string) => string;
}

export const replace: Replace = (searchValue: string | RegExp, replaceValue: ((substring: string) => string) | string) => (string: string): string => {
  return string.replace(searchValue, replaceValue as string);
}
