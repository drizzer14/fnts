export const gt = (b: string) => (a: string): boolean => a.localeCompare(b) < 0;
