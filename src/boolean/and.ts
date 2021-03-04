/**
 * Functional implementation of the `&&` operator.
 */
export function and<A, B>(a: A): (b: B) => boolean {
  return (b) => Boolean (a) && Boolean (b);
}
