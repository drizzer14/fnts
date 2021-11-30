/**
 * @module Types
 */

import type { VariadicFunction } from './function';

/**
 * A simple side effect function descriptor.
 */
export type Effect<Function extends VariadicFunction> =
  (...args: Parameters<Function>) => void
