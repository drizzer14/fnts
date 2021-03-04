/**
 * Funtional implementation of `String.prototype.padEnd`.
 */
export function padEnd (maxLength: number, padString?: string): (string: string) => string {
  return (string) => string.padEnd (maxLength, padString);
}
