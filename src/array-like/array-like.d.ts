export type ArrayLike = Array<any> | string

export type ArrayLikeMember<F extends ArrayLike> = F extends Array<infer T> ? T : string
