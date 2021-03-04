/**
 * Curried functional implementation of the `*` operator.
 */
export function mul (a: number): (b: number) => number {
  return (b) => a * b;
}
