import { ap } from '../../function/ap'
import { compose } from '../../function/compose'

import { maybe, Maybe } from './maybe'

export interface Just<A> extends Maybe<A> {
  fold (): A

  foldMap<B> (f: (a: A) => B): B

  isJust (): this is Just<A>

  isNothing (): false
}

export const just = <A> (a: A): Just<A> => {
  const monad: Just<A> = (f) => f(a)

  monad.map = (f) => compose(maybe, f)(a)
  monad.fold = () => a
  monad.foldMap = (f) => monad.map(f).fold()
  monad.ap = <M extends Just<(arg: any) => any>> (m: M) => {
    return compose(maybe, m.foldMap)(ap(a))
  }
  monad.isJust = () => true
  monad.isNothing = () => false

  return monad
}
