/**
 * @module Types
 */

import type { VariadicFunction } from './function.js'

/**
 * A simple side effect function descriptor.
 */
export type Effect<Function extends VariadicFunction> =
  (...args: Parameters<Function>) => void
