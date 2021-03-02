export const sort = <T>(comparator: (a: T, b: T) => number) => (array: T[]) => array.sort(comparator);
