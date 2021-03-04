import { div } from './div';

/**
 * Functional implementation of the `/` operator
 * with dividend and divisor being first and second arguments respectively.
 * Division by `0` is replaced with division by `1`.
 */
export function safeDiv (a: number): (b: number) => number {
  return (b) => div (a) (b || 1);
}

/**
 * Functional implementation of the `/` operator
 * with divisor and dividend being first and second arguments respectively.
 * Division by `0` is replaced with division by `1`.
 */
export function safeDivBy (b: number): (a: number) => number {
  return (a) => safeDiv (a) (b);
}
