/**
 * @module Set
 */

import type { Unshift } from './types/unshift'
import permutation3 from './permutation/permutation-3'
import type { Flatten, Flattenable } from './types/flatten'

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
export default function set<
  Source extends Flattenable,
  Path extends Flatten<Source>,
  Value
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
  Value
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
export default function set (...args: [any, any, any?]): any {
  // @ts-ignore
  return permutation3(
    // @ts-ignore
    <
      Source extends Flattenable,
      Path extends Flatten<Source>,
      Value
    > (
      source: Source,
      path: Path,
      value: Value
      // @ts-ignore
    ): Set<Source, Path, Value> => {
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
  )(...args)
}
