import type { Map } from './.internal/map'

/**
 * Functional alternative to the ternary operator.
 * Enforces the same return type for both branches,
 * the result is evaluated lazily.
 */
export default function conditional<Value, Return> (
  predicate: Map<Value, boolean>,
  left: Map<Value, Return>,
  right: Map<Value, Return>,
): Map<Value, Return> {
  return (value) => {
    return predicate(value) ? left(value) : right(value)
  }
}
