/**
 * @module Permutation
 */

import type { VariadicFunction } from './../types/function';

export type BinaryFunction = (a: any, b: any) => any

export type FirstParameter<Function extends VariadicFunction> =
  Parameters<Function>[0]

export type SecondParameter<Function extends VariadicFunction> =
  Parameters<Function>[1]

export default function permutation2
  <Function extends BinaryFunction> (
    fn: Function,
    shouldCurry?: (
      a: FirstParameter<Function> | SecondParameter<Function>,
      b: SecondParameter<Function> | undefined
    ) => boolean,
  ): VariadicFunction {
    return (...args) => {
      const [a1, b] = args

      return shouldCurry?.(a1, b) || args.length < fn.length
        ? (a2: FirstParameter<Function>) => fn(a2, a1)
        : fn(a1, b)
    }
  }
