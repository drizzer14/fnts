export type TernaryBranch<T, R = T> = (arg: T) => R

export const ternary = <T, R = T> (
  predicate: (arg: T) => boolean,
  right: TernaryBranch<T, R>,
  left: TernaryBranch<T, R>,
) => (arg: T): R => {
  return predicate(arg)
    ? right(arg)
    : left(arg)
}
