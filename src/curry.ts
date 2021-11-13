import type { Slice } from './.internal/slice'
import type { Gradual } from './.internal/gradual'

/**
 * Creates a type for an auto-curried function.
 */
export type Currying<
  Function extends (...args: any[]) => any,
  Length extends number = Parameters<Function>['length']
> =
  <Args extends Gradual<Parameters<Function>>>(...args: Args) =>
    Args['length'] extends 1
      ? (arg: Parameters<Function>[0]) => ReturnType<Function>
      : Args['length'] extends Length
        ? ReturnType<Function>
        : Currying<
          (
            ...args: Slice<Parameters<Function>, Args['length']>
          ) => ReturnType<Function>
        >

/**
 * Creates an auto-curried function from the one provided.
 * Until the curried function receives an expected number of arguments,
 * defined by either its `length` property or the `length` argument of `curry`,
 * it will return new function which receives from one to the remaining amount
 * of arguments.
 * Any excess arguments will not be applied.
 */
export default function curry<
  Function extends (...args: any[]) => any,
  Length extends number = Parameters<Function>['length']
> (
  fn: Function,
  length = fn.length as Length
): Currying<Function, Length> {
  return <A extends Gradual<Parameters<Function>>> (...args: A) => {
    const argsLength = args.length

    if (argsLength === length) {
      return fn(...args)
    }

    if (argsLength > length) {
      return fn(...args.slice(0, length))
    }

    return curry((...nextArgs) => fn(...args.concat(nextArgs)), length - argsLength)
  }
}
