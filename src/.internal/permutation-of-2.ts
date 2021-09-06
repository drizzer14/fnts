/**
 * @internal
 */
type BinaryFunction = (a: any, b: any) => any

/**
 * @internal
 */
export type FirstParameter<Function extends (...args: any[]) => any> =
  Parameters<Function>[0]

/**
 * @internal
 */
export type SecondParameter<Function extends (...args: any[]) => any> =
  Parameters<Function>[1]

/**
 * @internal
 */
export interface PermutationOf2 {
  <Function extends BinaryFunction> (
    b: SecondParameter<Function>,
  ): (a: FirstParameter<Function>) => ReturnType<Function>

  <Function extends BinaryFunction> (
    a: FirstParameter<Function>,
    b: SecondParameter<Function>,
  ): ReturnType<Function>
}

/**
 * @internal
 */
export const permutationOf2 =
  <Function extends BinaryFunction> (
    fn: Function,
    shouldCurry?: (
      a: FirstParameter<Function> | SecondParameter<Function>,
      b: SecondParameter<Function> | undefined
    ) => boolean,
  ) =>
    ((
      ...args: [
        a1: FirstParameter<Function> | SecondParameter<Function>,
        b: SecondParameter<Function> | undefined
      ]
    ) => {
      const [a1, b] = args

      return shouldCurry?.(a1, b) || args.length < fn.length
        ? (a2: FirstParameter<Function>) => fn(a2, a1)
        : fn(a1, b)
    }) as PermutationOf2

export default permutationOf2
