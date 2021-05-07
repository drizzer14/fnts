export interface Bifunctor<Left, Right> {
  map<NextLeft, NextRight> (
    left: (value: Left) => NextLeft,
    right: (value: Right) => NextRight
  ): Bifunctor<NextLeft, NextRight>
}
