/**
 * Functional implementation of the `**` operator
 * with base and exponent being first and second arguments respectively.
 */
export function exp (x: number): (p: number) => number {
  return (p) => x ** p;
}

/**
 * Functional implementation of the `**` operator
 * with exponent and base being first and second arguments respectively.
 */
export function expTo (p: number): (x: number) => number {
  return (x) => exp (x) (p);
}
