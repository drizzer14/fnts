import { ap } from '../../function/ap';
import type { Functor } from '../functor';
import type { Foldable } from '../foldable';
import { compose } from '../../function/compose';

import type { Fold } from './fold';
import { maybe, Maybe } from './maybe';
import type { Nothing } from './nothing';

export interface Just<A> extends Foldable<A>, Functor<A> {
  /**
   * Binds the value of this monad into the produced monad.
   */
  <M extends Maybe<any>>(f: (a: A) => M): M;
  map <B>(f: (a: A) => B): B extends null | undefined ? Nothing : Just<B>;
  /**
   * Applies the value of this monad to the function contained inside another monad.
   */
  ap <M extends Just<(arg: any) => any>>(m: M): ReturnType<Fold<M>> extends null | undefined ? Nothing : Just<ReturnType<Fold<M>>>;
  isJust (): this is Just<A>;
  isNothing (): false;
}

/**
 * The monadic container for a value.
 */
export function just <A>(a: A): Just<A> {
  const monad: Just<A> = (f) => f (a);

  monad.map = (f) => compose (maybe, f) (a);
  monad.fold = () => a;
  monad.foldMap = (f) => monad.map (f).fold ();
  monad.ap = <M extends Just<(arg: any) => any>>(m: M) => compose (maybe, m.foldMap) (ap <Fold<M>>(a) as M);
  monad.isJust = () => true;
  monad.isNothing = () => false;

  return monad;
}
