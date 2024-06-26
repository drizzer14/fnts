/**
 * @module Lens
 */

import permutation2 from '../permutation/permutation-2'
import type { Flatten, Flattenable } from '../types/flatten'

/**
 * Gets the value type inside a nested object type `Source` by provided `Path`
 * written in dot-notation.
 */
export type Get<
  Source extends Flattenable,
  Path extends string
> =
  Source extends Record<string, unknown>
    ? Path extends `${number}.${infer Right}`
      ? Get<Source, Right>
      // @ts-ignore
      : Path extends `${infer Left extends keyof Source}.${infer Right}`
        // @ts-ignore
        ? Get<Exclude<Source[Left], undefined>, Right> | Extract<Source[Left], undefined>
        : Path extends keyof Source
          ? Source[Path]
          : never
    : Source extends any[]
      ? Path extends `${infer Index extends number}.${infer Right}`
        ? Get<Exclude<Source[Index], undefined>, Right> | Extract<Source[Index], undefined>
        : Path extends `${infer Index extends number}`
          ? Source[Index]
          : never
      : never

/**
 * Gets the value inside a nested `source` object by provided `path`
 * written in dot-notation.
 */
// @ts-ignore
export default function get<
  Source extends Flattenable,
  Path extends Flatten<Source>
> (
  path: Path
  // @ts-ignore
): (source: Source) => Get<Source, Path>

/**
 * Gets the value inside a nested `source` object by provided `path`
 * written in dot-notation.
 */
// @ts-ignore
export default function get<
  Source extends Flattenable,
  Path extends Flatten<Source>
> (
  source: Source,
  path: Path
  // @ts-ignore
): Get<Source, Path>

/**
 * Gets the value inside a nested `source` object by provided `path`
 * written in dot-notation.
 */
export default function get (...args: [any, any?]): any {
  // @ts-ignore
  return permutation2(
    <
      Source extends Flattenable,
      Path extends string
    > (
      source: Source,
      path: Path
    ): Get<Source, Path> => {
      const keys = path.split('.')
      const length = keys.length

      let result = source as Get<Source, Path>

      for (let index = 0; index < length; index += 1) {
        result = result?.[keys?.[index] as keyof typeof result] as Get<Source, Path>
      }

      return result
    }
  )(...args)
}
