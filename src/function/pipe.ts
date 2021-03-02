export const pipe = <F extends (arg: any) => any, R>(f: F, g: (arg: ReturnType<F>) => R) => {
  return (x: Parameters<F>[0]): R => g(f(x));
};
