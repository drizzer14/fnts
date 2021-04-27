export const compose =
  <G extends (...args: any[]) => any, F extends (arg: ReturnType<G>) => any>
  (f: F, g: G) =>
    (...args: Parameters<G>): ReturnType<F> => {
      return f(g(...args))
    }
