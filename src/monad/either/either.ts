import type { Foldable } from '../foldable'
import type { Bifunctor } from '../bifunctor'
import { includes } from '../../array/includes'
import { compose } from '../../function/compose'

import { left, Left } from './left'
import { right, Right } from './right'

export interface Either<L, R> extends Bifunctor<L, R>, Pick<Foldable<L | R>, 'fold'> {
  <E extends Either<any, any>> (f: (a: L, b: R) => E): E

  left<B> (f: (a: L) => B): Left<B>

  right<B> (f: (a: R) => B): Right<B>

  map<C, D> (f: (a: L) => C, g: (b: R) => D): Either<C, D>

  foldMap<C, D> (f: (a: L) => C, g: (b: R) => D): C | D

  isLeft (): this is Left<L>

  isRight (): this is Right<R>
}

export const eitherN = <L, R> (
  l: () => L,
  r: R | (() => R),
): Either<L, NonNullable<R>> => {
  if (includes([null, undefined], r)) {
    return left(l()) as any
  }

  return right(
    typeof r === 'function'
      ? (r as Function)()
      : r,
  ) as any
}

export const eitherS = <L, R> (
  l: (error: unknown) => L,
  r: () => R,
): Either<L, R> => {
  try {
    return right(r()) as any
  } catch (error) {
    return compose(left, l)(error) as any
  }
}

export const either = async <L, R> (
  l: (error: unknown) => L,
  r: () => Promise<R>,
): Promise<Either<L, R>> => {
  return r().then(right).catch(compose(left, l)) as Promise<any>
}
