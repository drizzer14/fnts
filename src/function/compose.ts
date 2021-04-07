/**
 * Composes two functions together.
 * `f (g (x)) === compose (f, g) (x)`
 */
export function compose <G extends (...args: any[]) => any, F extends (arg: ReturnType<G>) => any>(f: F, g: G): (...args: Parameters<G>) => ReturnType<F> {
  return (...args) => f (g (...args));
}
