/**
 * @module Side Effects
 */

import type { Effect } from './types/effect'
import permutation2 from './permutation/permutation-2'
import type { VariadicFunction } from './types/function'

/**
 * Injects a function with a side effect.
 * Returns the copy of the original function.
 */
export default function inject<Function extends VariadicFunction> (
  effect: Effect<Function>
): (fn: Function) => Function

/**
 * Injects a function with a side effect.
 * Returns the copy of the original function.
 */
export default function inject<Function extends VariadicFunction> (
  fn: Function,
  effect: Effect<Function>
): Function

export default function inject (...args: [any, any?]): any {
  return permutation2(
    <Function extends VariadicFunction>(
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
