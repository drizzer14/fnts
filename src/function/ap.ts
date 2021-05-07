export interface ApFn {
  <Function extends (arg: any) => any> (
    arg: Parameters<Function>[0]
  ): (fn: Function) => ReturnType<Function>

  <Function extends (...args: any[]) => any> (
    ...args: Parameters<Function>
  ): (fn: Function) => ReturnType<Function>
}

export const ap = (
  <Function extends (...args: any[]) => any> (...args: Parameters<Function>) =>
    (fn: Function): ReturnType<Function> => {
      return fn(...args)
    }
) as ApFn
