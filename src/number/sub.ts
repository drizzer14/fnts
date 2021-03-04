/**
 * Functional implementation of the `-` operator
 * with minuend and subtrahend being first and second arguments respectively.
 */
export function sub (a: number): (b: number) => number {
  return (b) => a - b;
}

/**
 * Functional implementation of the `-` operator
 * with subtrahend and minuend being first and second arguments respectively.
 */
export function subOf (b: number): (a: number) => number {
  return (a) => sub (a) (b);
}
