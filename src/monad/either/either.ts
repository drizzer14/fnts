import { compose } from '../../function/compose';
import { included } from '../../array-like/included';

import { left, Left } from './left';
import { right, Right } from './right';

export type Either<L, R> = Left<L> | Right<R>;

/**
 * Creates the `either` monad from the nullable value.
 */
export function eitherN <L, R>(l: () => L, r: R): Either<L, NonNullable<R>> {
  if (included ([null, undefined]) (r)) {
    return left (l ());
  }

  return right (r as NonNullable<R>);
}

/**
 * Creates the `either` monad from the synchronous fallible operation.
 */
export function eitherS <L, R>(l: (error: unknown) => L, r: () => R): Either<L, R> {
  try {
    return right (r ());
  } catch (error) {
    return compose (left, l) (error) as Left<L>;
  }
}

/**
 * Creates the `either` monad from the asynchronous fallible operation.
 */
export async function either <L, R>(l: (error: unknown) => L, r: () => Promise<R>): Promise<Either<L, R>> {
  return r ().then (right).catch (compose (left, l)) as Promise<Either<L, R>>;
}
