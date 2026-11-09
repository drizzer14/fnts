/**
 * @module Lens
 */

import type { Flatten, Flattenable } from '../types/flatten'

import type { Get } from './get'

/**
 * Sets the `Value` type inside a nested object type `Source` by provided `Path`
 * written in dot-notation.
 */
export type Set<
  Source extends Flattenable,
  Path extends Flatten<Source>,
  Value extends Get<Source, Path>
> =
  Source extends Record<string, unknown>
    ? (Path extends keyof Source
      ? {
        [Key in keyof Source]: Key extends Path
          ? Value
          : Source[Key]
      }
      : (Path extends `${infer Left}.${infer Right}`
        ? (Left extends keyof Source
          ? (Source[Left] extends Flattenable
            ? {
              [Key in keyof Source]: (Key extends Left
                // @ts-ignore: just ignore Value type here, it should be correct from the start
                ? Set<Source[Left], Right, Value>
                : Source[Key])
            }
            : never)
          : never)
        : never))
    : Source extends any[]
        ? (Path extends `${number}`
            ? Value[]
            : (Path extends `${infer Left}.${infer Right}`
              ? (Left extends `${number}`
                ? (Source[number] extends Flattenable
                    // @ts-ignore: just ignore Value type here, it should be correct from the start
                    ? Set<Source[number], Right, Value>[]
                    : never)
                : never)
              : never))
        : never

/**
 * Sets the `value` inside a nested `source` object by provided `path`
 * written in dot-notation.
 */
export default function set<Source extends Flattenable> (
  source: Source
): <
  Path extends Flatten<Source>,
  Value extends Get<Source, Path>
> (
  path: Path,
  value: Value,
) => Set<Source, Path, Value>

/**
 * Sets the `value` inside a nested `source` object by provided `path`
 * written in dot-notation.
 */
export default function set<
  Source extends Flattenable,
  Path extends Flatten<Source>,
  Value extends Get<Source, Path>
> (
  path: Path,
  value: Value,
): (source: Source) => Set<Source, Path, Value>

/**
 * Sets the `value` inside a nested `source` object by provided `path`
 * written in dot-notation.
 */
export default function set<
  Source extends Flattenable,
  Path extends Flatten<Source>,
  Value extends Get<Source, Path>
> (
  source: Source,
  path: Path,
  value: Value
): Set<Source, Path, Value>

/**
 * Sets the `value` inside a nested `source` object by provided `path`
 * written in dot-notation.
 */
export default function set (...args: [any, any?, any?]): any {
  switch(args.length) {
    case 1: {
      // @ts-ignore
      return <Path extends string, Value>(path: Path, value: Value) => setter(args[0], path, value)
    }
    case 2: {
      return <Source extends Flattenable>(source: Source) => setter(source, args[0], args[1])
    }
    case 3: {
      // @ts-ignore
      return setter(...args)
    }
  }
}

function setter<
  Source extends Flattenable,
  Path extends Flatten<Source>,
  Value extends Get<Source, Path>
> (
  source: Source,
  path: Path,
  value: Value
): Set<Source, Path, Value> {
  const keys = path.split('.')
  const length = keys.length

  let result = structuredClone(source)

  if (length === 0) {
    result[path as keyof Source] = value as Source[keyof Source]
  }

  let scope: any = result[keys[0]! as keyof Source]

  for (let index = 1; index < length; index += 1) {
    if (index === length - 1) {
      scope[keys?.[index] as keyof typeof scope] = value
    } else {
      scope = scope?.[keys?.[index] as keyof typeof scope]
    }
  }

  return result as Set<Source, Path, Value>
}
