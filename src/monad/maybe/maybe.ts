import type { Functor } from '../functor';
import type { Foldable } from '../foldable';
import { included } from '../../array-like/included';

import type { Fold } from './fold';
import { just, Just } from './just';
import { nothing, Nothing } from './nothing';

export interface Maybe<A>
  extends Foldable<A | undefined>, Functor<A | undefined> {
  /**
   * Binds the value of this monad into the produced monad.
   */
  <M extends Maybe<any>>(f: (a: A) => M): M;
  map <B>(f: (a: A) => B): Maybe<B>;
  fold (): A | undefined;
  foldMap <B>(f: (a: A) => B): B | undefined;
  /**
   * Applies the value of this monad to the function contained inside another monad.
   */
  ap <M extends Maybe<(arg: any) => any>>(m: M): Maybe<ReturnType<Fold<M>>>;
  isJust (): this is Just<A>;
  isNothing (): this is Nothing;
}

/**
 * Creates the `maybe` monad from the nullable value.
 */
export function maybe <A>(a: A): Maybe<NonNullable<A>> {
  if (included ([null, undefined]) (a)) {
    return (nothing () as unknown) as Maybe<NonNullable<A>>;
  }

  return just (a) as Maybe<NonNullable<A>>;
}
