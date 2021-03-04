import { included } from '../../array-like/included';

import { just, Just } from './just';
import { nothing, Nothing } from './nothing';

export type Maybe<T> = Just<T> | Nothing;

/**
 * Creates the `maybe` monad from the nullable value.
 */
export function maybe <A>(a: A): Maybe<NonNullable<A>> {
  if (included ([null, undefined]) (a)) {
    return nothing ();
  }

  return just (a) as Just<NonNullable<A>>;
}
