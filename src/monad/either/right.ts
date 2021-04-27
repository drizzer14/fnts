import { ap } from '../../function/ap'
import { compose } from '../../function/compose'

import type { Either } from './either'

export interface Right<A> extends Either<never, A> {
  <E extends Either<any, any>> (f: (a: A) => E): E

  left (): never

  right<B> (f: (a: A) => B): Right<B>

  map<C, D> (f: (a: never) => C, g: (b: A) => D): Right<D>

  foldMap<C, D> (f: (a: never) => C, g: (b: A) => D): D

  isLeft (): false

  isRight (): this is Right<A>
}

export const right = <A> (a: A): Right<A> => {
  const monad = ap(a) as Right<A>

  monad.fold = () => a
  monad.foldMap = (_, g) => monad.map(() => undefined, g).fold()
  monad.map = (_, g) => compose(right, g)(a)
  monad.left = () => undefined as never
  monad.right = (f) => compose(right, f)(a)
  monad.isLeft = () => false
  monad.isRight = () => true

  return monad
}
