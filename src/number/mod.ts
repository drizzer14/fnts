/**
 * Functional implementation of the `%` operator
 * with dividend and divisor being first and second arguments respectively.
 */
export function mod (x: number): (m: number) => number {
  return (m) => x % m;
}

/**
 * Functional implementation of the `%` operator
 * with divisor and dividend being first and second arguments respectively.
 */
export function modOf (m: number): (x: number) => number {
  return (x) => mod (x) (m);
}
