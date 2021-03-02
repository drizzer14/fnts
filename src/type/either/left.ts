import { ap, compose } from '../../function';
import type { Foldable } from '../foldable';
import type { Bifunctor } from '../bifunctor';

import type { Either } from './either';

export interface Left<A> extends Bifunctor<A, never>, Pick<Foldable<A>, 'fold'> {
  <E extends Either<any, any>>(f: (a: A) => E): E;
  left<B>(f: (a: A) => B): Left<B>;
  right(): never;
  map<C, D>(f: (a: A) => C, g: (b: never) => D): Left<C>;
  foldMap<C, D>(f: (a: A) => C, g: (b: never) => D): C;
  isLeft(): true;
  isRight(): false;
}

export const left = <A>(a: A): Left<A> => {
  const monad = ap(a) as Left<A>;

  monad.fold = () => a;
  monad.foldMap = (f) => monad.map(f, () => undefined).fold();
  monad.map = (f) => compose(left, f)(a);
  monad.left = (f) => compose(left, f)(a);
  monad.right = () => undefined as never;
  monad.isLeft = () => true;
  monad.isRight = () => false;

  return monad;
};
