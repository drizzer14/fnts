import type { Pair } from './pair';

/**
 * Picks the first element of the pair.
 */
export function fst<T extends Pair>([f]: T): T[0] {
  return f;
}
