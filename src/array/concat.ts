export const concat = <T>(...b: Array<T | T[]>) => (a: T[]): T[] => a.concat(...b);
