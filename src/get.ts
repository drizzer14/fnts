/**
 * @module Get
 */

import permutation2 from './permutation/permutation-2'

/**
 * Recursively flattens object type to a union of its keys
 * combined through dot-notation.
 */
export type Flatten<
  Source extends Record<string, unknown> | any[],
> =
  | keyof Source extends keyof any[]
    ? `${number}`
    : (
      | keyof Source
      | keyof {
        [
          Key in keyof Source as
            Key extends string
              ? Source[Key] extends Record<string, unknown>
                ? `${Key}.${Flatten<Source[Key]>}`
                : Source[Key] extends any[]
                  ? Source[Key] extends Array<any[]> | Record<string, unknown>[]
                      ? `${Key}.${number}` | `${Key}.${number}.${Flatten<Source[Key][number]>}`
                      : `${Key}.${number}`
                  : Key
              : never
        ] : never
      }
    )

/**
 * Gets the value type inside a nested object type `Source` by provided `Path`
 * written in dot-notation.
 */
export type Get<
  Source,
  Path extends string
> =
  Source extends Record<string, unknown>
    ? Path extends `${infer Index extends number}.${infer Right}`
      ? Get<Source, Right>
      : Path extends `${infer Left extends keyof Source}.${infer Right}`
        ? Get<Exclude<Source[Left], undefined>, Right> | Extract<Source[Left], undefined>
        : Path extends keyof Source
          ? Source[Path]
          : never
    : Source extends any[]
      ? Path extends `${infer Left extends number}.${infer Right}`
        ? Get<Exclude<Source[Left], undefined>, Right> | Extract<Source[Left], undefined>
        : Path extends `${infer Index extends number}`
          ? Source[Index]
          : never
      : never

/**
 * Gets the value inside a nested `source` object by provided `path`
 * written in dot-notation.
 */
export default function get<
  Source extends Record<string, unknown> | any[],
  Path extends Flatten<Source>
>(
  path: Path
): (source: Source) => Get<Source, Path>

/**
 * Gets the value inside a nested `source` object by provided `path`
 * written in dot-notation.
 */
export default function get<
  Source extends Record<string, unknown> | any[],
  Path extends Flatten<Source>
>(
  source: Source,
  path: Path
): Get<Source, Path>

/**
 * Gets the value inside a nested `source` object by provided `path`
 * written in dot-notation.
 */
export default function get(...args: [any, any?]): any {
  return permutation2(
    <
      Source extends Record<string, unknown> | any[],
      Path extends string
    >(
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
