import { ap } from '../../function/ap'
import { compose } from '../../function/compose'

import type { Either } from './either'

export interface Left<A> extends Either<A, never> {
  <E extends Either<any, any>> (f: (a: A) => E): E

  left<B> (f: (a: A) => B): Left<B>

  right (): never

  map<C, D> (f: (a: A) => C, g: (b: never) => D): Left<C>

  foldMap<C, D> (f: (a: A) => C, g: (b: never) => D): C

  isLeft (): this is Left<A>

  isRight (): false
}

export const left = <A> (a: A): Left<A> => {
  const monad = ap(a) as Left<A>

  monad.fold = () => a
  monad.foldMap = (f) => monad.map(f, () => undefined).fold()
  monad.map = (f) => compose(left, f)(a)
  monad.left = (f) => compose(left, f)(a)
  monad.right = () => undefined as never
  monad.isLeft = () => true
  monad.isRight = () => false

  return monad
}
