/**
 * @module Side Effects
 */

import inject from './inject'
import type { Effect } from './types/effect';

/**
 * Rethrows a received error 
 * performing an optional side effect.
 */
export default function rethrow<Error> (
  effect: Effect<(error: Error) => never>
): (error: Error) => never {
  return inject(
    (error) => {
      throw error
    },
    effect
  )
}
