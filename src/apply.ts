/**
 * @module Application
 */

import type { VariadicFunction } from './types/function'

/**
 * `ReturnType` utility for multiple functions.
 */
export type ReturnTypes<Functions extends VariadicFunction[], Returns extends any[] = []> =
  Functions['length'] extends 0
    ? Returns
    : Functions extends [infer Function extends VariadicFunction, ...infer Rest extends VariadicFunction[]]
      ? ReturnTypes<Rest, [...Returns, ReturnType<Function>]>
      : never

/**
 * Applies all functions on curried arguments and returns an array of results.
 */
export default function apply<
  Functions extends VariadicFunction[]
> (...functions: Functions): (...args: Parameters<Functions[0]>) => ReturnTypes<Functions> {
  return (...args) => {
    const length = functions.length
    const result = new Array(length) as ReturnTypes<Functions>

    for (let index = 0; index < length; index += 1) {
      result[index] = functions[index](...args) as ReturnTypes<Functions>[number]
    }

    return result
  }
}
