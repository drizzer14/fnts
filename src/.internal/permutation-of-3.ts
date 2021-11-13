import type { FirstParameter } from './permutation-of-2'

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
export default function permutationOf3
  <Function extends TernaryFunction> (fn: Function):
   (...args: any[]) => any {
    return (...args) => {
      const [a1, b, c] = args

      return args.length < fn.length
        ? (a2: FirstParameter<Function>) => fn(a2, a1, b)
        : fn(a1, b, c)
    }
  }
