/**
 * @module Permutation
 */

import type { VariadicFunction } from './../types/function';
import type { FirstParameter, SecondParameter } from './permutation-2'

export type TernaryFunction = (a: any, b: any, c: any) => any

export type ThirdParameter<Function extends VariadicFunction> =
  Parameters<Function>[2]

export default function permutation3
  <Function extends TernaryFunction> (
    fn: Function,
    shouldCurry?: (
      a: FirstParameter<Function> | SecondParameter<Function>,
      b: SecondParameter<Function> | ThirdParameter<Function>,
      c: ThirdParameter<Function> | undefined
    ) => boolean,
  ):
   VariadicFunction {
    return (...args) => {
      const [a1, b, c] = args

      return shouldCurry?.(a1, b, c) || args.length < fn.length
        ? (a2: FirstParameter<Function>) => fn(a2, a1, b)
        : fn(a1, b, c)
    }
  }
