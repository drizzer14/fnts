export const or = (...args: unknown[]): boolean => {
  const length = args.length

  for (let index = 0; index < length; index += 1) {
    if (Boolean(args[index])) {
      return true
    }
  }

  return false
}
