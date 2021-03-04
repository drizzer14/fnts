export function ap<F extends (arg: any) => any>(arg: Parameters<F>[0]): (f: F) => ReturnType<F>;

export function ap<F extends (...args: any[]) => any>(...args: Parameters<F>): (f: F) => ReturnType<F>;

/**
 * Applies the arguments to a function.
 */
export function ap<F extends (...args: any[]) => any>(...args: Parameters<F>): (f: F) => ReturnType<F> {
  return (f) => f(...args);
}
