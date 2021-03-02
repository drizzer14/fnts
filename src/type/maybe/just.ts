import { ap, compose } from '../../function';
import type { Functor } from '../functor';
import type { Foldable } from '../foldable';

import type { Fold } from './fold';
import { maybe, Maybe } from './maybe';
import type { Nothing } from './nothing';

export interface Just<A> extends Foldable<A>, Functor<A> {
  <M extends Maybe<any>>(f: (a: A) => M): M;
  map<B>(f: (a: A) => B): B extends null | undefined ? Nothing : Just<B>;
  ap<M extends Just<(arg: any) => any>>(m: M): ReturnType<Fold<M>> extends null | undefined ? Nothing : Just<ReturnType<Fold<M>>>;
  isJust(): true;
  isNothing(): false;
}

export const just = <A>(a: A): Just<A> => {
  const monad: Just<A> = (f) => f(a);

  monad.map = (f) => compose(maybe, f)(a);
  monad.fold = () => a;
  monad.foldMap = (f) => monad.map(f).fold();
  monad.ap = <M extends Just<(arg: any) => any>>(m: M) => compose(maybe, m.foldMap)(ap<Fold<M>>(a) as M);
  monad.isJust = () => true;
  monad.isNothing = () => false;

  return monad;
};
