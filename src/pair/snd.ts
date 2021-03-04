import type { Pair } from './pair';

/**
 * Picks the second element of the pair.
 */
export function snd<T extends Pair>([, s]: T): T[1] {
  return s;
}
