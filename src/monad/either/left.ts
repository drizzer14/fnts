import { compose } from '../../function/compose'

import type { Either } from './either'

export interface Left<Value> extends Either<Value, never> {
  <Next extends Either<any, any>> (binder: (value: Value) => Next): Next

  left<Next> (mapper: (a: Value) => Next): Left<Next>

  right (): never

  map<NextLeft, NextRight> (
    left: (value: Value) => NextLeft,
    right: (value: never) => NextRight
  ): Left<NextLeft>

  foldMap<ReturnLeft, ReturnRight> (
    left: (value: Value) => ReturnLeft,
    right: (value: never) => ReturnRight
  ): ReturnLeft

  isLeft (): this is Left<Value>

  isRight (): false
}

export const left = <Value> (value: Value): Left<Value> => {
  const monad = (
    <Next extends Either<any, any>>(
      binder: (value: Value) => Next
    ): Next => binder(value)
  ) as Left<Value>

  monad.fold = () => value
  monad.foldMap = (mapper) => monad.map(mapper, () => undefined).fold()
  monad.map = (mapper) => compose(left, mapper)(value)
  monad.left = (mapper) => compose(left, mapper)(value)
  monad.right = () => undefined as never
  monad.isLeft = () => true
  monad.isRight = () => false

  return monad
}
