/**
 * Functional implementation of the `+` operator.
 */
export function add (a: number): (b: number) => number {
  return (b) => a + b;
}
