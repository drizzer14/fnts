/**
 * Funtional implementation of `Array.prototype.flat`.
 */
export function flat (depth = 1): <T>(array: T[]) => T[] {
  return (array) => array.flat (depth);
}
