export const and = (...args: unknown[]): boolean => {
  const length = args.length
  let target = false

  for (let index = 0; index < length; index += 1) {
    target = Boolean(args[index]) || target
  }

  return target
}
