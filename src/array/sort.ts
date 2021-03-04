/**
 * Funtional implementation of `Array.prototype.sort`.
 */
export function sort <T>(comparator: (a: T) => (b: T) => number): (array: T[]) => T[] {
  return (array) => array.sort ((a, b) => comparator (a) (b));
}
