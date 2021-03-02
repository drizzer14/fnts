import { included } from '../../array';

import { just, Just } from './just';
import { nothing, Nothing } from './nothing';

export type Maybe<T> = Just<T> | Nothing;

export const maybe = <A>(a: A): Maybe<NonNullable<A>> => {
  if (included([null, undefined])(a)) {
    return nothing();
  }

  return just(a) as Just<NonNullable<A>>;
}
