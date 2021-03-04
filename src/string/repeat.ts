/**
 * Funtional implementation of `String.prototype.repeat`.
 */
export function repeat (count: number): (string: string) => string {
  return (string) => string.repeat (count);
}
