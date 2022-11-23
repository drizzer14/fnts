/**
 * @module Composition
 */

import type { UnaryFunction } from './types/function';

/**
 * Makes a composition of functions from received arguments.
 */
export type Compose<
  Arguments extends any[],
  Functions extends any[] = []
> =
  Arguments['length'] extends 0
    ? Functions
    : Arguments extends [infer A, infer B]
      ? [...Functions, (arg: A) => B]
      : Arguments extends [infer A, ...infer Rest, infer P, infer L]
        ? Compose<[A, ...Rest, P], [...Functions, (arg: P) => L]>
        : []

/**
 * Destructures a composition of functions into arguments.
 */
export type Decompose<
  Functions extends UnaryFunction[],
  Arguments extends any[] = []
> = Functions extends [(arg: infer Arg) => infer Return]
  ? [...Arguments, Arg, Return]
  : Functions extends [...infer Rest extends UnaryFunction[], (arg: infer Arg) => any]
    ? Decompose<Rest, [...Arguments, Arg]>
    : []

/**
 * (B -> C) . (A -> B) = A -> C
 */
export default function compose<
  A extends any[],
  B,
  C
> (
  f: (arg: B) => C,
  g: (...args: A) => B,
): (...args: A) => C

/**
 * (B -> C) . (A -> B) = A -> C
 */
export default function compose<
  A extends any[],
  B,
  C
> (
  f: (arg: B) => C,
  g: (...args: A) => B,
  ...args: A
): C

/**
 * (B -> C) . (A -> B) = A -> C
 */
export default function compose<
  A extends any[],
  B,
  C
> (
  f: (arg: B) => C,
  g: (...args: A) => B,
  ...maybeArgs: A
) {
  return maybeArgs.length === 0
    ? (...args: A) => f(g(...args))
    : f(g(...maybeArgs))
}
