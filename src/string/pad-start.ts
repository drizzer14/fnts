export const padStart = (maxLength: number, padString?: string) => (string: string): string => {
  return string.padStart(maxLength, padString);
};
