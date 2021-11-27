/**
 * @module Side Effects
 */

import inject from './inject'
import identity from './identity'
import type { Map } from './types/map'
import type { Identity } from './identity'
import type { Effect } from './types/effect'

/**
 * Performs a side effect
 * passing the received argument through itself.
 */
export default function tap<Value> (
  effect: Effect<Map<Value, any>>
): Identity<Value> {
  return inject(identity, effect)
}
