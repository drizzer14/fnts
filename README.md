# fnts

![GitHub](https://img.shields.io/github/license/drizzer14/fnts)
![Travis (.com)](https://img.shields.io/travis/com/drizzer14/fnts)

TypeScript / JavaScript functional programming utilities inspired by the
[fantasy-land](https://github.com/fantasyland/fantasy-land) specification and
[Haskell](https://www.haskell.org/) programming language.

![](https://raw.githubusercontent.com/drizzer14/fnts/main/logo.svg)

## Installation

TypeScript 4.2.2 is required for this package's typings to work properly.

```shell
λ npm i fnts typescript@4.2.2
```

```shell
λ yarn add fnts typescript@4.2.2
```

## Usage

```typescript
import { add } from 'fnts/number';

const onePlusTwo = add (1) (2); // 1 + 2 = 3
const addToOne = add (1); // (b: number) => b + 1
const onePlusThree = addToOne (3); // 3 + 1 = 4
```

There are cases with anticommutative operations, such as division, that have
two variants of the same function preserving the desired order of calculation:

```typescript
import { div, divBy } from 'fnts/number';

const fourDivByTwo = div (4) (2); // 4 / 2 = 2
const divByThree = divBy (3); // (a: number) => a / 3
const sixDivByThree = divByThree (6); // 6 / 3 = 2 
```

## Examples

[Lagrange polynomial](https://en.wikipedia.org/wiki/Lagrange_polynomial):

```typescript
import { mul } from 'fnts/number';
import { foldl } from 'fnts/array';
import type { Pair } from 'fnts/pair';
import { compose } from 'fnts/function';

const lagrange = (points: Pair<number>[]) => (x: number): number => {
  const l = (xj: number): number => {
    return foldl <Pair<number>[], number>(
      (p, [xi]) => xi === xj
        ? p
        : p * ((x - xi) / (xj - xi)),
      1
    ) (points);
  };
  
  return foldl <Pair<number>[], number>(
    (s, [xi, yi]) => s + (compose (mul (yi), l) (xi)),
    0
  ) (points);
};

lagrange ([[1, 1], [2, 4], [3, 9]]) (6); // 36 – interpolates 6 through parabola (y = x^2)
lagrange ([[1, 1], [2, 8], [3, 27]]) (2); // 8 – interpolates 2 through hyperbola (y = x^3)
```

Tell if a given directed graph has path between two vertices:

```typescript
import { fst } from 'fnts/pair';
import { not, eq } from 'fnts/boolean';
import { compose } from 'fnts/function';
import { or, filter, comprehend, length } from 'fnts/array';

const hasPath = (graph: Pair<number>[]) => (x: number, y: number): boolean => guard (
  [compose (eq (0), length), () => eq (x) (y)],
  [() => eq (x) (y), () => true],
  () => {
    const feq = compose (eq (x), fst);
    const nonXNodes = filter <Pair<number>>(compose (not, feq)) (graph);

    return or (
      comprehend <Pair<number>, boolean>(
        ([, py]) => hasPath (nonXNodes) (py, y),
        feq,
      ) (graph),
    );
  }
) (graph);

hasPath ([[1, 2], [2, 3], [3, 2], [4, 3], [4, 5]]) (1, 3); // true
hasPath ([[1, 2], [2, 3], [3, 2], [4, 3], [4, 5]]) (3, 5); // false
```

## Motivation

This project was made as a fun excercise around functional programming principlces. It comes nowhere
near more serious projects described below as alternatives, so treat it as the utilitary toy making
it easier to approach FP in TypeScript.

## Alternatives

These projects would give you a decent representation of concepts `fnts` 
tried to implement and compromise with.

- [fp-ts](https://github.com/gcanti/fp-ts)
- [ramda](https://github.com/ramda/ramda)
- [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide)
