/**
 * Funtional implementation of `Array.prototype.join`.
 */
export function join (separator = ','): <T>(array: T[]) => string {
  return (array) => array.join (separator);
}
