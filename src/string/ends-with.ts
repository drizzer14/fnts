/**
 * Funtional implementation of `String.prototype.endsWith`.
 */
export function endsWith (substring: string, endPosition?: number): (string: string) => boolean {
  return (string) => string.endsWith (substring, endPosition);
}
