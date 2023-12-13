/**
 * @module Composition
 */

import type { UnaryFunction } from './types/function';

/**
 * Makes a pipeline of functions from received arguments.
 */
export type Pipe<
  Arguments extends any[],
  Functions extends any[] = []
> =
  Arguments['length'] extends 0
    ? Functions
    : Arguments extends [infer A, infer B]
      ? [(arg: A) => B, ...Functions]
      : Arguments extends [infer A, ...infer Rest, infer P, infer L]
        ? Pipe<[A, ...Rest, P], [(arg: P) => L, ...Functions]>
        : []

/**
 * Destructures a pipeline of functions into arguments.
 */
export type Depipe<
  Functions extends UnaryFunction[],
  Arguments extends any[] = []
> = Functions extends [(arg: infer Arg) => infer Return]
  ? [...Arguments, Arg, Return]
  : Functions extends [(arg: infer Arg) => any, ...infer Rest extends UnaryFunction[]]
    ? Depipe<Rest, [...Arguments, Arg]>
    : []

/**
 * (A -> B) . (B -> C) = A -> C
 */
export default function pipe<
  A extends any[],
  B,
  C
> (
  f: (...args: A) => B,
  g: (arg: B) => C
): (...args: A) => C

/**
 * (A -> B) . (B -> C) = A -> C
 */
export default function pipe<
  A extends any[],
  B,
  C
> (
  ...args: [
    ...args: A,
    f: (...args: A) => B,
    g: (arg: B) => C
  ]
): C

/**
 * (A -> B) . (B -> C) = A -> C
 */
export default function pipe<
  A extends any[],
  B,
  C
> (
  ...maybeArgs: [
    ...args: A,
    f: (...args: A) => B,
    g: (arg: B) => C
  ]
) {
  return maybeArgs.length === 2
    ? (...args: A) => maybeArgs[1](maybeArgs[0](...args))
    : maybeArgs[maybeArgs.length - 1](maybeArgs[maybeArgs.length - 2](...maybeArgs.slice(0, -2)))
}
