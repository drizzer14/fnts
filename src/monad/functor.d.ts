export interface Functor<Value> {
  map<Next> (mapper: (value: Value) => Next): Next
}
