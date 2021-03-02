export const compose = <G extends (arg: any) => any, R>(f: (arg: ReturnType<G>) => R, g: G) => {
  return (x: Parameters<G>[0]): R => f(g(x));
};
