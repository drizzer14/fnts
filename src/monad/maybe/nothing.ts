import type { Maybe } from './maybe'

export interface Nothing extends Maybe<undefined> {
  <M extends Maybe<any>> (f: (a: any) => M): M

  fold (): undefined

  foldMap<B> (f: (a: any) => B): undefined

  map<B> (f: (a: any) => B): Nothing

  isJust (): false

  isNothing (): this is Nothing
}

export const nothing = (): Nothing => {
  const monad: Nothing = () => nothing()

  monad.map = ((_) => nothing()) as Nothing['map']
  monad.fold = () => undefined
  monad.foldMap = () => undefined
  monad.ap = ((_) => nothing()) as Nothing['ap']
  monad.isJust = () => false
  monad.isNothing = () => true

  return monad
}
