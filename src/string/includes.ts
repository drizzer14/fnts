export const includes = (substring: string, position?: number) => (string: string): boolean => {
  return string.includes(substring, position);
};
