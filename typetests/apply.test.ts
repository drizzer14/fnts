import apply from '../src/apply'
import identity from '../src/identity'

import tacit from './tacit'

const a1: number[] = apply(
  (a: number, b: number) => a + b,
  (a: number, b: number) => a - b,
  (a: number, b: number) => a / b,
  (a: number, b: number) => a * b,
)(3, 2)

const a2: number[] = tacit(
  apply(
    (a: number, b: number) => a + b,
    (a: number, b: number) => a - b,
    (a: number, b: number) => a / b,
    (a: number, b: number) => a * b,
  ),
  3, 2
)

const b1: [number, string] = apply(
  (identity<number>),
  <T>(value: T) => `${value}`,
)(3)

const b2: [number, string] = tacit(
  apply(
    (identity<number>),
    <T>(value: T) => `${value}`,
  ),
  3
)
