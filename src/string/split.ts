/**
 * Funtional implementation of `String.prototype.split`.
 */
export function split (separator = '', limit?: number): (string: string) => string[] {
  return (string) => string.split (separator, limit);
}
