export interface Functor<A> {
  /**
   * Maps the value contained inside the functor into new value.
   */
  map <B>(f: (a: A) => B): B;
}
