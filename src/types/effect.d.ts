/**
 * @module Types
 */

/**
 * A simple side effect function descriptor.
 */
export type Effect<Function extends (...args: any[]) => any> =
  (...args: Parameters<Function>) => void
