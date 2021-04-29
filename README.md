<p align="center">
  <img src="https://raw.githubusercontent.com/drizzer14/fnts/main/logo.svg" height="64" />
  <h1 align="center">fnts</h1>
</p>

<p align="center">
    <a href="https://github.com/drizzer14/fnts/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/drizzer14/fnts" />
    </a>
    <a href="https://travis-ci.com/github/drizzer14/fnts">
      <img src="https://img.shields.io/travis/com/drizzer14/fnts" />
    </a>
    <a href="https://www.npmjs.com/package/fnts">
      <img src="https://img.shields.io/npm/v/fnts" />
    </a>
</p>

TypeScript / JavaScript functional programming utilities inspired by the
[fantasy-land](https://github.com/fantasyland/fantasy-land) specification and
[Haskell](https://www.haskell.org/) programming language.

## Installation

**TypeScript 4.2.2 is required for this package's typings to work properly.**

```shell
λ npm i fnts typescript@4.2.2
```

```shell
λ yarn add fnts typescript@4.2.2
```

## Usage

```typescript
import { add } from 'fnts/number'

const onePlusTwo = add(1, 2) // 1 + 2 = 3
const addToOne = add(1) // b => b + 1
const onePlusThree = addToOne(3) // 3 + 1 = 4
```

There are cases with anticommutative operations, such as division, that have two
variants of the same function preserving the desired order of calculation:

```typescript
import { div, divBy } from 'fnts/number'

const fourDivByTwo = div(4, 2) // 4 / 2 = 2
const divByThree = divBy(3) // a => a / 3
const sixDivByThree = divByThree(6) // 6 / 3 = 2 
```

## Examples

[Lagrange polynomial](https://en.wikipedia.org/wiki/Lagrange_polynomial):

```typescript
import { foldl } from 'fnts/array'
import { mul, add } from 'fnts/number'
import type { Pair } from 'fnts/tuple'
import { compose, pipe } from 'fnts/function'

const lagrange = (points: Pair<number>[]) => (x: number): number => {
  const l = (xj: number): number => {
    return foldl(
      points,
      (p, [xi]) => xi === xj
        ? p
        : p * ((x - xi) / (xj - xi)),
      1
    )
  }

  return foldl(
    points,
    (s, [xi, yi]) => pipe(
      l,
      mul(yi),
      add(s),
    )(xi),
    0
  )
}

lagrange([
  [1, 1], [2, 4], [3, 9]
])(6) // 36 – interpolates 6 through parabola (y = x^2)

lagrange([
  [1, 1], [2, 8], [3, 27]
])(2) // 8 – interpolates 2 through hyperbola (y = x^3)
```

Tell if a given directed graph has path between two vertices:

```typescript
import { fst } from 'fnts/pair'
import { compose } from 'fnts/function'
import { length } from 'fnts/array-like'
import { not, eq, bool } from 'fnts/boolean'
import { or, filter, comprehend } from 'fnts/array'

const hasPath =
  (graph: Pair<number>[]) =>
    (x: number, y: number): boolean => guard(
      [compose(eq(0), length), () => eq(x, y)],
      [() => eq(x, y), bool(true)],
      () => {
        const feq = compose(eq(x), fst)
        const nonXNodes = filter(graph, compose(not, feq))

        return or(
          graph,
          comprehend(
            ([, py]) => hasPath(nonXNodes)(py, y),
            feq,
          )
        )
      }
    )(graph)

hasPath([
  [1, 2], [2, 3], [3, 2], [4, 3], [4, 5]
])(1, 3) // true

hasPath([
  [1, 2], [2, 3], [3, 2], [4, 3], [4, 5]
])(3, 5) // false
```

## Motivation

This project was made as a fun excercise around functional programming
principlces. It comes nowhere near more serious projects described below as
alternatives, so treat it as the utilitary toy making it easier to approach FP
in TypeScript.

## Alternatives

These projects would give you a decent representation of concepts `fnts`
tried to implement and compromise with.

- [fp-ts](https://github.com/gcanti/fp-ts)
- [ramda](https://github.com/ramda/ramda)
- [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide)
