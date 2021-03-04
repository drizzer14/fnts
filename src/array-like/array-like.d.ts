export type ArrayLike = Array<any> | String;

export type ArrayLikeMember<F extends ArrayLike> = F extends Array<infer T> ? T : string;
