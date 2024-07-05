/**
 * @module Lens
 */

import type { Unshift } from '../types/unshift'
import type { Flatten, Flattenable } from '../types/flatten'

import type { Get } from './get'

/**
 * Sets the `Value` type inside a nested object type `Source` by provided `Path`
 * written in dot-notation.
 */
export type Set<
  Source extends Flattenable,
  Path extends string,
  Value
> =
  Source extends Record<string, unknown>
    ? Path extends `${number}.${infer Right}`
      ? Set<Source, Right, Value>
      // @ts-ignore
      : Path extends `${infer Left extends keyof Source}.${infer Right}`
        ? {
          [Key in keyof Source]: Key extends Exclude<keyof Source, Left>
            ? Source[Key]
            // @ts-ignore
            : Set<Exclude<Source[Left], undefined>, Right, Value>
        }
        : Path extends keyof Source
          ? {
            [Key in keyof Source]: Key extends Exclude<keyof Source, Path>
              ? Source[Key]
              : Value
          }
          : never
    : Source extends any[]
      ? Path extends `${infer Index extends number}.${infer Right}`
        ? Unshift<Source, Index, Set<Exclude<Source[Index], undefined>, Right, Value>>
        : Path extends `${infer Index extends number}`
          ? Unshift<Source, Index, Value>
          : never
      : never

/**
 * Sets the `value` inside a nested `source` object by provided `path`
 * written in dot-notation.
 */
// @ts-ignore
export default function set<Source extends Flattenable> (
  source: Source
): <
  Path extends Flatten<Source>,
  // @ts-ignore
  Value extends Get<Source, Path>
> (
  path: Path,
  value: Value,
  // @ts-ignore
) => Set<Source, Path, Value>

/**
 * Sets the `value` inside a nested `source` object by provided `path`
 * written in dot-notation.
 */
// @ts-ignore
export default function set<
  Source extends Flattenable,
  Path extends Flatten<Source>,
  // @ts-ignore
  Value extends Get<Source, Path>
> (
  path: Path,
  value: Value,
  // @ts-ignore
): (source: Source) => Set<Source, Path, Value>

/**
 * Sets the `value` inside a nested `source` object by provided `path`
 * written in dot-notation.
 */
// @ts-ignore
export default function set<
  Source extends Flattenable,
  Path extends Flatten<Source>,
  // @ts-ignore
  Value extends Get<Source, Path>
> (
  source: Source,
  path: Path,
  value: Value
  // @ts-ignore
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
      // @ts-ignore
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
  // @ts-ignore
  Value extends Get<Source, Path>
> (
  source: Source,
  path: Path,
  value: Value
  // @ts-ignore
): Set<Source, Path, Value> {
  // @ts-ignore
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

  // @ts-ignore
  return result as Set<Source, Path, Value>
}
