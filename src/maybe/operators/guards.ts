import { Maybe, Just, jid, Nothing, nid } from '../maybe'

export const isJust = <Value>(monad: Maybe<Value>): monad is Just<Value> => {
  return Object.prototype.hasOwnProperty.call(monad, jid)
}

export const isNothing = <Value>(monad: Maybe<Value>): monad is Nothing => {
  return Object.prototype.hasOwnProperty.call(monad, nid)
}
