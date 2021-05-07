import { FirstParameter, SecondParameter } from './permutation-of-2'

/**
 * @internal
 */
type TernaryFunction = (a: any, b: any, c: any) => any

/**
 * @internal
 */
export type ThirdParameter<Function extends (...args: any[]) => any> =
  Parameters<Function>[2]

/**
 * @internal
 */
export interface PermutationOf3 {
  <Function extends TernaryFunction> (
    b: SecondParameter<Function>,
    c: ThirdParameter<Function>,
  ): (a: FirstParameter<Function>) => ReturnType<Function>

  <Function extends TernaryFunction> (
    a: FirstParameter<Function>,
    b: SecondParameter<Function>,
    c: ThirdParameter<Function>,
  ): ReturnType<Function>
}

/**
 * @internal
 */
export const permutationOf3 =
  <Function extends TernaryFunction> (fn: Function) =>
    ((
      ...args: [
        a1: FirstParameter<Function> | SecondParameter<Function>,
        b: SecondParameter<Function> | ThirdParameter<Function>,
        c: ThirdParameter<Function> | undefined,
      ]
    ) => {
      const [a1, b, c] = args

      return args.length < fn.length
        ? (a2: FirstParameter<Function>) => fn(a2, a1, b)
        : fn(a1, b, c)
    }) as PermutationOf3
