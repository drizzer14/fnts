export interface Foldable<A> {
  fold(): A;
  foldMap<B>(f: (a: A) => B): B;
}
