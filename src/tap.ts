import type { Identity } from './identity'
import type { Effect } from './.internal/effect'

/**
 * Performs a side effect
 * passing the received argument through itself.
 */
export default function tap<Value> (
  effect: Effect<(arg: Value) => any>
): Identity<Value> {
  return (arg) => {
    effect(arg)

    return arg
  }
}
