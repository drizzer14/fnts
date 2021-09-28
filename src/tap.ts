import type { Identity } from './identity'
import type { Effect } from './.internal/effect';

/**
 * Performs a side effect
 * passing the received argument through itself.
 */
export function tap<Value> (
  effect: Effect<(arg: Value) => any>
): Identity<Value> {
  return (arg) => {
    effect(arg)

    return arg
  }
}

export default tap
