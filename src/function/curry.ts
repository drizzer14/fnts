import type { Slice } from '../list/slice'
import type { Gradual } from '../list/gradual'

export type Curry<
  Function extends (...args: any[]) => any,
  Length extends number = Parameters<Function>['length']
> =
  <Args extends Gradual<Parameters<Function>>>(...args: Args) =>
    Args['length'] extends 1
      ? (arg: Parameters<Function>[0]) => ReturnType<Function>
      : Args['length'] extends Length
        ? ReturnType<Function>
        : Curry<
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
): Curry<Function, Length> => {
  return <A extends Gradual<Parameters<Function>>> (...args: A) => {
    const argsLength = args.length

    if (argsLength > length) {
      return fn(...args.slice(0, length))
    }

    if (argsLength === length) {
      return fn(...args)
    }

    return curry(fn.bind(null, ...args))
  }
}
