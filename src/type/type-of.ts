import type { Type } from './type'

export interface TypeOfFn {
  <T extends string>(operand: T): 'string'

  <T extends number>(operand: T): 'number'

  <T extends bigint>(operand: T): 'bigint'

  <T extends boolean>(operand: T): 'boolean'

  <T extends symbol>(operand: T): 'symbol'

  <T extends undefined>(operand: T): 'undefined'

  <T extends object>(operand: T): 'object'

  <T extends Function>(operand: T): 'function'

  (operand: unknown): Type
}

export const typeOf = (
  (operand: unknown): Type => typeof operand
) as TypeOfFn
