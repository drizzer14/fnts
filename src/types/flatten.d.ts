/**
 * @module Types
 */

/**
 * Type subjective to flattening.
 */
export type Flattenable = Record<string, unknown> | any[]

/**
 * Recursively flattens object type to a union of its keys
 * combined through dot-notation.
 */
export type Flatten<
  Source extends Flattenable,
> = (
  Source extends Record<string, unknown>
    ? (keyof {
      [
        Key in keyof Source as
          Key extends string
            ? (Source[Key] extends Flattenable
              ? Key | `${Key}.${Flatten<Source[Key]>}`
              : (Source[Key] extends any[]
                ? Key | `${Key}.${number}.${Flatten<Source[Key][number]>}`
                : Key))
            : never
      ]: void
    })
    : (Source extends any[]
      ? (Source[number] extends Flattenable
        ? `${number}` | `${number}.${Flatten<Source[number]>}`
        : `${number}`)
      : never)
  // So that Flatten is recognized to always return strings
) extends infer Key extends string
      ? Key
      : never
