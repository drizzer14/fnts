/**
 * @module Types
 */

/**
 * Picks the last entry from the tuple or array.
 */
export type Last<T extends any[]> =
  T extends [...any[], infer L]
    ? L
    : any
