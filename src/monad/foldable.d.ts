export interface Foldable<Value> {
  fold (): Value

  foldMap<Return> (mapper: (value: Value) => Return): Return
}
