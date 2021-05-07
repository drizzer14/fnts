export type TernaryBranch<Value, Return = Value> = (arg: Value) => Return

export const ternary = <Value, Return = Value> (
  predicate: (arg: Value) => boolean,
  right: TernaryBranch<Value, Return>,
  left: TernaryBranch<Value, Return>,
) => (arg: Value): Return => {
  return predicate(arg)
    ? right(arg)
    : left(arg)
}
