import type { Functor } from '../functor';
import type { Foldable } from '../foldable';

import type { Maybe } from './maybe';

export interface Nothing extends Foldable<undefined>, Functor<undefined> {
  (f: (a?: undefined) => Nothing): Nothing;
  map(f: (a: undefined) => Nothing): Nothing;
  ap<F extends (a: any) => any, M extends Maybe<F>>(m: M): Nothing;
  isJust(): false;
  isNothing(): true;
}

export const nothing = (): Nothing => {
  const monad: Nothing = () => nothing();

  monad.map = nothing;
  monad.fold = () => undefined;
  monad.foldMap = () => undefined;
  monad.ap = nothing;
  monad.isJust = () => false;
  monad.isNothing = () => true;

  return monad;
};
