import type { Functor } from '../functor';
import type { Foldable } from '../foldable';

import type { Maybe } from './maybe';

export interface Nothing extends Foldable<undefined>, Functor<undefined> {
  /**
   * Binds the value of this monad into nothing.
   */
  (f: (a?: undefined) => Nothing): Nothing;
  map (f: (a: undefined) => Nothing): Nothing;
  /**
   * Applies the value of this monad to the function contained inside another monad.
   */
  ap <F extends (a: any) => any, M extends Maybe<F>>(m: M): Nothing;
  isJust (): false;
  isNothing (): this is Nothing;
}

/**
 * The monadic container for nothing, i.e. `undefined`.
 */
export function nothing (): Nothing {
  const monad: Nothing = () => nothing ();

  monad.map = nothing;
  monad.fold = () => undefined;
  monad.foldMap = () => undefined;
  monad.ap = nothing;
  monad.isJust = () => false;
  monad.isNothing = () => true;

  return monad;
};
