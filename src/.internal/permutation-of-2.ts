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
export default function permutationOf2
  <Function extends BinaryFunction> (
    fn: Function,
    shouldCurry?: (
      a: FirstParameter<Function> | SecondParameter<Function>,
      b: SecondParameter<Function> | undefined
    ) => boolean,
  ): (...args: any[]) => any {
    return (...args) => {
      const [a1, b] = args

      return shouldCurry?.(a1, b) || args.length < fn.length
        ? (a2: FirstParameter<Function>) => fn(a2, a1)
        : fn(a1, b)
    }
  }
