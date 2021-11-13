import just, { Just } from './just'
import nothing, { Nothing } from './nothing'

/**
 * Type constructor for `Maybe`.
 * Can be either `Just` of a provided value type, or `Nothing`.
 */
export type Maybe<Value> = Just<Value> | Nothing

/**
 * Constructor function for `Maybe`.
 * Creates either `just` of a provided value, or `nothing`.
 */
export default function maybe<Value> (value: Value | null | undefined): Maybe<Value> {
  return value === null || value === undefined
    ? nothing()
    : just(value)
}
