import { Curry3, curry3, ThirdParameter } from './curry-3'
import { Curry2, curry2, FirstParameter, SecondParameter } from './curry-2'

/**
 * @internal
 */
export type OptionalTernaryFunction = (f: any, s: any, t?: any) => any

/**
 * @internal
 */
export type OptionalArgs<F extends OptionalTernaryFunction> = [
  f: FirstParameter<F> | SecondParameter<F>,
  s: SecondParameter<F> | ThirdParameter<F>,
  t?: ThirdParameter<F>
]

/**
 * @internal
 */
export const curry2Or3 =
  <F extends OptionalTernaryFunction>
  (fn: F) =>
    (shouldCurry: (...args: OptionalArgs<F>) => boolean | 2 | 3) =>
      (...[f, s, t]: OptionalArgs<F>): Curry2<F> | Curry3<F> => {
        const curryTo = shouldCurry(f, s, t)

        if (!curryTo) {
          return fn(f, s, t)
        }

        return curryTo === 3
          ? curry3(fn)(f, s, t)
          : curry2(fn)(f, s)
      }
