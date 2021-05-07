export type Pair<A = any, B = A> = [A, B]

export const fst = <P extends Pair>(pair: P): P[0] => pair[0]

export const snd = <P extends Pair>(pair: P): P[1] => pair[1]
