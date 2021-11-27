---
id: currying
slug: /concepts/currying
title: Currying
---

The `curry` function is here to help with auto-currying of variadic or fixed amount of arguments. It does not provide the "placeholder" feature like in ramda, as in JavaScripts, where placeholders are rather a syntetic feature, its cost would be to run a loop on each call of the source function's curried derivatives.

By default it curries up to the function's `length` which can be determined only if the function has a fixed amount of declared arguments without the optional ones.

E.g. this function will be predictably curried for up to three consecutive calls:

```typescript
function sumOfThree (a: number, b: number, c: number): number {
  return a + b + c;
}

curry(sumOfThree)(1)(2)(3);
```

While the next one is gonna be unable to determine the amount of curries to perform, so it must be specified manually:

```typescript
function sum (...args: number[]): number {
  return args.reduce((a, c) => a + c, 0);
}

const sumOfThree = curry(sum, 3)(1)(2)(3);
```

Curried arguments can be passed in any combinations as long as the final amount of them is given in the end and the order is preserved:

```typescript
const curriedSumOfThree = curry(sumOfThree);

curriedSumOfThree(1, 2, 3) === 
curriedSumOfThree(1, 2)(3) === 
curriedSumOfThree(1)(2, 3) ===
curriedSumOfThree(1)(2)(3);
```

To allow for currying with permutations take a look at the [Arguments Permutation](/concepts/arguments-permutation) concept.
