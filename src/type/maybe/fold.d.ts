import type { Maybe } from './maybe';

export type Fold<M extends Maybe<any>> = M extends Maybe<infer A> ? A : never;
