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
  Path extends Flatten<Source>
> = 
  Source extends Record<string, unknown>
    ? (Path extends keyof Source
      ? Source[Path]
      : (Path extends `${infer Left}.${infer Right}`
        ? (Left extends keyof Source
          ? (Source[Left] extends Flattenable
            // @ts-ignore
            ? Get<Source[Left], Right>
            : never)
          : never)
        : never))
    : Source extends any[]
        ? (Path extends `${number}`
          ? Source[number]
          : (Path extends `${infer Left}.${infer Right}`
            ? (Left extends `${number}`
              ? (Source[number] extends Flattenable
                // @ts-ignore
                ? Get<Source[number], Right>
                : never)
              : never)
            : never))
        : never

/**
 * Gets the value inside a nested `source` object by provided `path`
 * written in dot-notation.
 */
export default function get<Source extends Flattenable> (
  source: Source
): <Path extends Flatten<Source>> (path: Path) => Get<Source, Path>

/**
 * Gets the value inside a nested `source` object by provided `path`
 * written in dot-notation.
 */
export default function get<
  Source extends Flattenable,
  Path extends Flatten<Source>
> (
  path: Path
): (source: Source) => Get<Source, Path>

/**
 * Gets the value inside a nested `source` object by provided `path`
 * written in dot-notation.
 */
export default function get<
  Source extends Flattenable,
  Path extends Flatten<Source>
> (
  source: Source,
  path: Path
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
      Path extends Flatten<Source>
    > (
      sourceOrPath: Source | Path,
      pathOrSource: Path | Source
    ): Get<Source, Path> => {
      let source: Source, path: Path

      if (typeof sourceOrPath === 'string') {
        source = pathOrSource as Source
        path = sourceOrPath as Path
      } else {
        source = sourceOrPath as Source
        path = pathOrSource as Path
      }

      const keys = (path as string).split('.')
      const length = keys.length

      let result = source as Get<Source, Path>

      for (let index = 0; index < length; index += 1) {
        result = result?.[keys?.[index] as keyof typeof result] as Get<Source, Path>
      }

      return result
    }
  )(...args)
}
