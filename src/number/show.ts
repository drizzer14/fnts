export const show = <T extends number> (x: T): `${T}` => `${x}` as const
