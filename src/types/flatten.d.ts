/**
 * @module Types
 */

/**
 * Type subjective to flattening.
 */
export type Flattenable = Record<string, unknown> | Array<any>

export type NormalizeFlattenable<Source extends Flattenable> = 
  Source extends Array<infer Element>
    ? Record<`${number}`, Element>
    : Source

/**
 * Recursively flattens object type to a union of its keys
 * combined through dot-notation.
 */
export type Flatten<
  Source extends Flattenable,
> = | keyof NormalizeFlattenable<Source>
    | keyof {
      [
        Key in keyof Source as
          Key extends string
            ? (Source[Key] extends Flattenable
              // @ts-ignore
              ? `${Key}.${Flatten<NormalizeFlattenable<Source[Key]>>}`
              : Key)
            : never
      ]: never
    }
