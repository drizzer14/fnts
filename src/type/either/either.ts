import { included } from '../../array';
import { compose } from '../../function';

import { left, Left } from './left';
import { right, Right } from './right';

export type Either<L, R> = Left<L> | Right<R>;

export const eitherN = <L, R>(l: () => L, r: R): Either<L, NonNullable<R>> => {
  if (included([null, undefined])(r)) {
    return left(l());
  }

  return right(r as NonNullable<R>);
};

export const eitherS = <L, R>(l: (error: unknown) => L, r: () => R): Either<L, R> => {
  try {
    return right(r());
  } catch (error) {
    return compose(left, l)(error);
  }
}

export const either = async <L, R>(l: (error: unknown) => L, r: () => Promise<R>): Promise<Either<L, R>> => {
  return r().then(right).catch(compose(left, l));
};
