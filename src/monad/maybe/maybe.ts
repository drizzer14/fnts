import type { Functor } from '../functor'
import type { Foldable } from '../foldable'
import { includes } from '../../array/includes'

import type { Fold } from './fold'
import { just, Just } from './just'
import { nothing, Nothing } from './nothing'

export interface Maybe<A>
  extends Foldable<A | undefined>, Functor<A | undefined> {
  <M extends Maybe<any>> (f: (a: A) => M): M

  map<B> (f: (a: A) => B): Maybe<B>

  fold (): A | undefined

  foldMap<B> (f: (a: A) => B): B | undefined

  ap<M extends Maybe<(arg: any) => any>> (m: M): Maybe<ReturnType<Fold<M>>>

  isJust (): this is Just<A>

  isNothing (): this is Nothing
}

export const maybe = <A> (a: A): Maybe<NonNullable<A>> => {
  if (includes([null, undefined], a)) {
    return (nothing() as unknown) as Maybe<NonNullable<A>>
  }

  return just(a) as Maybe<NonNullable<A>>
}
