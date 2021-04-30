import { eq } from '../boolean/eq'
import { curry2 } from '../.internal/curry-2'
import { compose } from '../function/compose'

import { typeOf } from './type-of'
import type { Type } from './type'

interface OfTypeFn {
  (type: 'string'): (operand: unknown) => operand is string

  (type: 'number'): (operand: unknown) => operand is number

  (type: 'bigint'): (operand: unknown) => operand is bigint

  (type: 'boolean'): (operand: unknown) => operand is boolean

  (type: 'symbol'): (operand: unknown) => operand is symbol

  (type: 'undefined'): (operand: unknown) => operand is undefined

  (type: 'object'): (operand: unknown) => operand is object

  (type: 'function'): (operand: unknown) => operand is Function

  (operand: unknown, type: 'string'): operand is string

  (operand: unknown, type: 'number'): operand is number

  (operand: unknown, type: 'bigint'): operand is bigint

  (operand: unknown, type: 'boolean'): operand is boolean

  (operand: unknown, type: 'symbol'): operand is symbol

  (operand: unknown, type: 'undefined'): operand is undefined

  (operand: unknown, type: 'object'): operand is object

  (operand: unknown, type: 'function'): operand is Function
}

export const ofType = curry2(
  (operand: unknown, type: Type): boolean => {
    return compose(eq(type), typeOf)(operand)
  },
) as OfTypeFn
