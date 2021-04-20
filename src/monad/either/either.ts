import type { Foldable } from '../foldable';
import type { Bifunctor } from '../bifunctor';
import { compose } from '../../function/compose';
import { included } from '../../array-like/included';

import { left, Left } from './left';
import { right, Right } from './right';

export interface Either<L, R> extends Bifunctor<L, R>, Pick<Foldable<L | R>, 'fold'> {
  /**
   * Binds the value of this monad into the produced monad.
   */
    <E extends Either<any, any>>(f: (a: L, b: R) => E): E;
  /**
   * Maps the value of this `either` into new `either`.
   */
  left <B>(f: (a: L) => B): Left<B>;
  right <B>(f: (a: R) => B): Right<B>;
  map <C, D>(f: (a: L) => C, g: (b: R) => D): Either<C, D>;
  /**
   * Maps and returns the value of this `either`.
   */
  foldMap <C, D>(f: (a: L) => C, g: (b: R) => D): C | D;
  isLeft (): this is Left<L>;
  isRight (): this is Right<R>;
}

/**
 * Creates the `either` monad from the nullable value.
 */
export function eitherN <L, R>(l: () => L, r: R): Either<L, NonNullable<R>> {
  if (included ([null, undefined]) (r)) {
    return left (l ()) as any;
  }

  return right (r as NonNullable<R>) as any;
}

/**
 * Creates the `either` monad from the synchronous fallible operation.
 */
export function eitherS <L, R>(l: (error: unknown) => L, r: () => R): Either<L, R> {
  try {
    return right (r ()) as any;
  } catch (error) {
    return compose (left, l) (error) as any;
  }
}

/**
 * Creates the `either` monad from the asynchronous fallible operation.
 */
export async function either <L, R>(l: (error: unknown) => L, r: () => Promise<R>): Promise<Either<L, R>> {
  return r ().then (right).catch (compose (left, l)) as Promise<any>;
}
