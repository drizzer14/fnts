/**
 * Functional implementation of the `/` operator
 * with dividend and divisor being first and second arguments respectively.
 */
export function div (a: number): (b: number) => number {
  return (b) => a / b;
}

/**
 * Functional implementation of the `/` operator
 * with divisor and dividend being first and second arguments respectively.
 */
export function divBy (b: number): (a: number) => number {
  return (a) => div (a) (b);
}
