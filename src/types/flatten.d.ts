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
  Source extends Record<string, unknown> | any[],
> = keyof Source extends keyof any[]
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
