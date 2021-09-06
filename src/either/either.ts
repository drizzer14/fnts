export const lid = Symbol.for('@@functional/left')

export type Left<Value> = {
  [lid]: Value
}

export const left = <Value>(value: Value): Left<Value> => ({
  [lid]: value
})

export const rid = Symbol.for('@@functional/right')

export type Right<Value> = {
  [rid]: Value
}

export const right = <Value>(value: Value): Right<Value> => ({
  [rid]: value
})

export type Either<LeftValue, RightValue> = Left<LeftValue> | Right<RightValue>

export const either = async <LeftValue, RightValue>(
  value: () => Promise<RightValue>
): Promise<Either<LeftValue, RightValue>> => {
  return value().then(right).catch(left)
}

export default either
