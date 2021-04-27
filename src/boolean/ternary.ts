export type Branch<T, R = T> = (arg: T) => R

export const ternary = <T, R = T> (
  predicate: (arg: T) => boolean,
  right: Branch<T, R>,
  left: Branch<T, R>,
) => (arg: T): R => {
  return predicate(arg)
    ? right(arg)
    : left(arg)
}
