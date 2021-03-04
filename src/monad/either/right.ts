import { ap } from '../../function/ap';
import type { Foldable } from '../foldable';
import type { Bifunctor } from '../bifunctor';
import { compose } from '../../function/compose';

import type { Either } from './either';

export interface Right<A> extends Bifunctor<never, A>, Pick<Foldable<A>, 'fold'> {
  /**
   * Binds the value of this monad into the produced monad.
   */
  <E extends Either<any, any>>(f: (a: A) => E): E;
  left (): never;
  /**
   * Maps the value of this `right` into new `right`.
   */
  right <B>(f: (a: A) => B): Right<B>;
  map <C, D>(f: (a: never) => C, g: (b: A) => D): Right<D>;
  /**
   * Maps and returns the value of this `either`.
   */
  foldMap <C, D>(f: (a: never) => C, g: (b: A) => D): D;
  isLeft (): false;
  isRight (): this is Right<A>;
}

/**
 * The monadic container for the value produced by the "successful" operation.
 */
export function right <A>(a: A): Right<A> {
  const monad = ap (a) as Right<A>;

  monad.fold = () => a;
  monad.foldMap = (_, g) => monad.map (() => undefined, g).fold ();
  monad.map = (_, g) => compose (right, g) (a);
  monad.left = () => undefined as never;
  monad.right = (f) => compose (right, f) (a);
  monad.isLeft = () => false;
  monad.isRight = () => true;

  return monad;
}
