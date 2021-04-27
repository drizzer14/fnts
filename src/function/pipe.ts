export const pipe =
  <F extends (...args: any[]) => any, G extends (arg: ReturnType<F>) => any> (
    f: F,
    g: G,
  ) => (...args: Parameters<F>): ReturnType<G> => g(f(...args))
