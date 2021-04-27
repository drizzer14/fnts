import type { Gradual, Slice } from '../tuple'

export type Curry<F extends (...args: any[]) => any> =
  <A extends Gradual<Parameters<F>>>(...args: A) =>
    A['length'] extends 1
      ? (arg: Parameters<F>[0]) => ReturnType<F>
      : A['length'] extends Parameters<F>['length']
      ? ReturnType<F>
      : Curry<(...args: Slice<Parameters<F>, A['length']>) => ReturnType<F>>

export function curry<F extends (...args: any[]) => any> (f: F): Curry<F> {
  return <A extends Gradual<Parameters<F>>> (...args: A) => {
    return args.length >= f.length
      ? f(...args.slice(0, f.length))
      : curry(f.bind(null, ...args))
  }
}
