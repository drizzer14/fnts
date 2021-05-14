export const xor = (...args: unknown[]): boolean => {
  const length = args.length
  let hasTrue = false
  let hasFalse = false

  for (let index = 0; index < length; index += 1) {
    const current = Boolean(args[index])

    if (current && !hasTrue) {
      hasTrue = true
    }

    if (!current && !hasFalse) {
      hasFalse = true
    }

    if (hasTrue && hasFalse) {
      return true
    }
  }

  return false
}
