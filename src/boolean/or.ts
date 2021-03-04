/**
 * Functional implementation of the `||` operator.
 */
export function or<A, B>(a: A): (b: B) => boolean {
  return (b) => Boolean (a) || Boolean (b);
}
