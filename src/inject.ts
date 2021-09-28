import type { Effect } from './.internal/effect';
import permutationOf2 from './.internal/permutation-of-2';

/**
 * Injects a function with a side effect.
 * Returns the copy of the original function.
 */
export function inject<Function extends (...args: any[]) => any> (
  effect: Effect<Function>
): (fn: Function) => Function

/**
 * Injects a function with a side effect.
 * Returns the copy of the original function.
 */
export function inject<Function extends (...args: any[]) => any> (
  fn: Function,
  effect: Effect<Function>
): Function

export function inject (...args: [any, any?]) {
  return permutationOf2(
    <Function extends (...args: any[]) => any>(
      fn: Function,
      effect: Effect<Function>
    ) => {
      return ((...args) => {
        effect(...args as Parameters<Function>)

        return fn(...args)
      }) as Function
    }
  )(...args)
}

export default inject
