export const included = (string: string) => (substring: string, position?: number): boolean => {
  return string.includes(substring, position);
};

