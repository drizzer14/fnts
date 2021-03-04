/**
 * Funtional implementation of `String.prototype.startsWith`.
 */
export function startsWith (substring: string, position?: number): (string: string) => boolean {
  return (string) => string.startsWith(substring, position);
}
