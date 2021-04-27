export const toUpperCase = <T extends string> (string: T): Uppercase<T> => {
  return string.toUpperCase() as Uppercase<T>
}
