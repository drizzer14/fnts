export interface Foldable<A> {
  /**
   * Returns the contained value.
   */
  fold (): A;
  /**
   * Maps and returns the contained value.
   */
  foldMap <B>(f: (a: A) => B): B;
}
