export const toLowerCase = <T extends string> (string: T): Lowercase<T> => {
  return string.toLowerCase() as Lowercase<T>
}
