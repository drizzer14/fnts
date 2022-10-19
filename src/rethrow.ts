/**
 * @module Side Effects
 */

import type { Effect } from './types/effect';

/**
 * Rethrows a received error
 * performing an optional side effect.
 */
export default function rethrow<Error> (
  effect?: Effect<(error: Error) => never>
): (error: Error) => never {
  return (error) => {
    effect?.(error);

    throw error;
  }
}
