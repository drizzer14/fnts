---
id: currying
slug: /concepts/currying
title: Currying
---

The `curry` function is here to help with auto-currying of variadic functions
or functions with a fixed amount of arguments.
It does not provide the "placeholder" feature like in
ramda, since in JavaScript where placeholders are rather a synthetic feature, its cost would be to run a loop on each call of the source function's curried
derivatives.

By default it curries up to the function's `length` which can be determined only
if the function has a fixed amount of declared arguments without the optional
ones.

E.g. this function will be predictably curried for up to three consecutive
calls:

```typescript
function sumOfThree (a: number, b: number, c: number): number {
  return a + b + c;
}

curry(sumOfThree)(1)(2)(3);
```

While the next one is gonna be unable to determine the amount of curries to
perform, so it must be specified manually:

```typescript
function sum (...args: number[]): number {
  return args.reduce((a, c) => a + c, 0);
}

const sumOfThree = curry(sum, 3)(1)(2)(3);
```

Curried arguments can be passed in any combinations as long as the final amount
of them is given in the end and the order is preserved:

```typescript
const curriedSumOfThree = curry(sumOfThree);

curriedSumOfThree(1, 2, 3) ===
curriedSumOfThree(1, 2)(3) ===
curriedSumOfThree(1)(2, 3) ===
curriedSumOfThree(1)(2)(3);
```

To allow for currying with permutations take a look at
the [Arguments Permutation](/concepts/arguments-permutation) concept.

---

One big downside to this, is that it is not always reliable with generic
functions. For example (taken from
the [issue](https://github.com/drizzer14/fnts/issues/16) on GitHub):

```typescript
import curry from "fnts/curry";

declare function map<A, B> (as: A[], f: (a: A) => B): B[];

const mapC = curry(map);

declare const as: number[];

const bs = mapC(as, (x) => x > 0);
const bs2 = mapC(as)((x) => x > 0);
```

This code is not type-safe right where `mapC` is used. `bs` and `bs2` have
mapping functions on their right side, the `x`argument of which cannot be
assigned a type and has `unknown` inferred instead. One way to beat this is to
explicitly cast `x` to `unknown`, although I don't think it's a "good" way to
use this library and TypeScript in general.

The issue above comes from
the [language itself](https://github.com/microsoft/TypeScript/issues/30369) and
at this moment in time cannot be fixed by the library.
