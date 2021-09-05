import type { Slice } from './.internal/slice'
import type { Gradual } from './.internal/gradual'

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

export const curry = <
  Function extends (...args: any[]) => any,
  Length extends number = Parameters<Function>['length']
> (
  fn: Function,
  length = fn.length as Length
): Currying<Function, Length> => {
  return <A extends Gradual<Parameters<Function>>> (...args: A) => {
    const argsLength = args.length

    if (argsLength === length) {
      return fn.apply(undefined, args)
    }

    if (argsLength > length) {
      return fn.apply(undefined, args.slice(0, length))
    }

    return curry(fn.bind(undefined, ...args))
  }
}

export default curry
