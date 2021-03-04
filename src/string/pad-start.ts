/**
 * Funtional implementation of `String.prototype.padStart`.
 */
export function padStart (maxLength: number, padString?: string): (string: string) => string {
  return (string) => string.padStart (maxLength, padString);
}
