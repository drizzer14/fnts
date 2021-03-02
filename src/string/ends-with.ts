export const endsWith = (substring: string, endPosition?: number) => (string: string): boolean => {
  return string.endsWith(substring, endPosition);
};
