import { Maybe, Just, jid, Nothing, nid } from '../maybe'

import { isJust } from './guards'

export type Fold<Monad extends Maybe<any>> =
  Monad extends Just<infer Value>
    ? Value
    : Monad extends Nothing
      ? null
      : never

export const fold = <Monad extends Maybe<any>>(
  monad: Monad
): Fold<Monad> => {
  return isJust(monad)
    ? monad[jid]
    : (monad as Nothing)[nid]
}
