export const padEnd = (maxLength: number, padString?: string) => (string: string): string => {
  return string.padEnd(maxLength, padString);
};
