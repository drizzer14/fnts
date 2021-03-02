export const or = (b: unknown) => (a: unknown): boolean => Boolean(a) || Boolean(b);
