import { ap } from '../../function/ap';
import type { Foldable } from '../foldable';
import type { Bifunctor } from '../bifunctor';
import { compose } from '../../function/compose';

import type { Either } from './either';

export interface Left<A> extends Bifunctor<A, never>, Pick<Foldable<A>, 'fold'> {
  /**
   * Binds the value of this monad into the produced monad.
   */
  <E extends Either<any, any>>(f: (a: A) => E): E;
  /**
   * Maps the value of this `left` into new `left`.
   */
  left <B>(f: (a: A) => B): Left<B>;
  right (): never;
  map< C, D>(f: (a: A) => C, g: (b: never) => D): Left<C>;
  /**
   * Maps and returns the value of this `either`.
   */
  foldMap <C, D>(f: (a: A) => C, g: (b: never) => D): C;
  isLeft (): this is Left<A>;
  isRight (): false;
}

/**
 * The monadic container for the value produced by the "unsuccessful" operation.
 */
export function left <A>(a: A): Left<A> {
  const monad = ap (a) as Left<A>;

  monad.fold = () => a;
  monad.foldMap = (f) => monad.map (f, () => undefined).fold ();
  monad.map = (f) => compose (left, f) (a);
  monad.left = (f) => compose (left, f) (a);
  monad.right = () => undefined as never;
  monad.isLeft = () => true;
  monad.isRight = () => false;

  return monad;
}
