import { ap } from '../../function/ap'
import { compose } from '../../function/compose'

import { maybe, Maybe } from './maybe'

export interface Just<Value> extends Maybe<Value> {
  fold (): Value

  foldMap<Return> (mapper: (value: Value) => Return): Return

  isJust (): this is Just<Value>

  isNothing (): false
}

export const just = <Value> (value: Value): Just<Value> => {
  const monad: Just<Value> = (binder) => binder(value)

  monad.map = (mapper) => compose(maybe, mapper)(value)
  monad.fold = () => value
  monad.foldMap = (mapper) => monad.map(mapper).fold()
  monad.ap = <M extends Just<(arg: any) => any>> (m: M) => {
    return compose(maybe, m.foldMap)(ap(value))
  }
  monad.isJust = () => true
  monad.isNothing = () => false

  return monad
}
