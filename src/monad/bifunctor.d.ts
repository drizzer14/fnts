export interface Bifunctor<A, B> {
  map<C, D> (f: (a: A) => C, g: (b: B) => D): Bifunctor<C, D>
}
