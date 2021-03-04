export interface Bifunctor<A, B> {
  /**
   * Maps two values contained inside the bifunctor into new values.
   */
  map <C, D>(f: (a: A) => C, g: (b: B) => D): Bifunctor<C, D>;
}
