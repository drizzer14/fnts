/**
 * @module Types
 */

/**
 * Gradual defines a tuple type which accepts any amount
 * of entries from the original one.
 * 
 * ```typescript
 * Gradual<[1, 2, 3]> === [1] | [1, 2] | [1, 2, 3]
 * ```
 */
export type Gradual<T extends any[] | readonly any[]> = T extends [...infer R, any]
  ? R['length'] extends 0
    ? T
    : T | Gradual<R>
  : T
