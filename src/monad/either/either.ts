import type { Foldable } from '../foldable'
import type { Bifunctor } from '../bifunctor'
import { compose } from '../../function/compose'

import { left as l, Left } from './left'
import { right as r, Right } from './right'

export interface Either<LeftValue, RightValue>
  extends Bifunctor<LeftValue, RightValue>,
    Pick<Foldable<LeftValue | RightValue>, 'fold'> {
  <Next extends Either<any, any>> (
    binder: (left: LeftValue, right: RightValue) => Next,
  ): Next

  left<Next> (left: (value: LeftValue) => Next): Left<Next>

  right<Next> (right: (value: RightValue) => Next): Right<Next>

  map<NextLeft, NextRight> (
    left: (value: LeftValue) => NextLeft,
    right: (value: RightValue) => NextRight,
  ): Either<NextLeft, NextRight>

  foldMap<ReturnLeft, ReturnRight> (
    left: (value: LeftValue) => ReturnLeft,
    right: (value: RightValue) => ReturnRight,
  ): ReturnLeft | ReturnRight

  isLeft (): this is Left<LeftValue>

  isRight (): this is Right<RightValue>
}

export const eitherN = <Left, Right> (
  left: () => Left,
  right: () => Right,
): Either<Left, NonNullable<Right>> => {
  if ([null, undefined].includes(right() as any)) {
    return l(left()) as any
  }

  return r(
    right()
  ) as any
}

export const eitherS = <Left, Right> (
  left: (error: unknown) => Left,
  right: () => Right,
): Either<Left, Right> => {
  try {
    return r(right()) as any
  } catch (error) {
    return compose(l, left)(error) as any
  }
}

export const either = async <Left, Right> (
  left: (error: unknown) => Left,
  right: () => Promise<Right>,
): Promise<Either<Left, Right>> => {
  return right().then(r).catch(compose(l, left)) as Promise<any>
}
