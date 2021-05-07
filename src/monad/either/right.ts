import { compose } from '../../function/compose'

import type { Either } from './either'

export interface Right<Value> extends Either<never, Value> {
  <Next extends Either<any, any>> (binder: (value: Value) => Next): Next

  left (): never

  right<Next> (mapper: (value: Value) => Next): Right<Next>

  map<NextLeft, NextRight> (
    left: (value: never) => NextLeft,
    right: (value: Value) => NextRight
  ): Right<NextRight>

  foldMap<ReturnLeft, ReturnRight> (
    left: (value: never) => ReturnLeft,
    right: (value: Value) => ReturnRight
  ): ReturnRight

  isLeft (): false

  isRight (): this is Right<Value>
}

export const right = <Value> (value: Value): Right<Value> => {
  const monad = (
    <Next extends Either<any, any>>(
      binder: (value: Value) => Next
    ): Next => binder(value)
  ) as Right<Value>

  monad.fold = () => value
  monad.foldMap = (_, mapper) => monad.map(() => undefined, mapper).fold()
  monad.map = (_, mapper) => compose(right, mapper)(value)
  monad.left = () => undefined as never
  monad.right = (mapper) => compose(right, mapper)(value)
  monad.isLeft = () => false
  monad.isRight = () => true

  return monad
}
