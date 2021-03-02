export const split = (separator = '', limit?: number) => (string: string): string[] => {
  return string.split(separator, limit);
};
