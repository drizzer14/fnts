export const show = <T extends number> (number: T): `${T}` => `${number}` as const
