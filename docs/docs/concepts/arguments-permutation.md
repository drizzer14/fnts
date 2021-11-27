---
id: arguments-permutation
slug: /concepts/arguments-permutation
title: Arguments Permutation
---

For non-commutative operations or functions that *can* be applied in the compositional context it is handy to be able to automatically permutate (switch places of) their arguments. For some functions in `fnts` this is already implemented:

```typescript
import { fmap } from 'fnts/maybe/operators';

const mapToNumber = (maybe: Maybe<string>): Maybe<number> => fmap(maybe, (value) => Number(value));
```

Here, `mapToNumber` declaration is equivalent to:

```typescript
import { fmap } from 'fnts/maybe/operators';

const mapToNumber = fmap<string, number>(Number);
```

On the TypeScript's level this is made possible through the use of function overloads, where for each `fmap` permutation there's a proper overload.

In `fnts`, to allow such an operation, there are two helper functions: `permutation2` and `permutation3`. Those functions accept two parameters: 

1. The function to be made permutable. 
2. The condition on which to decide if its first argument should be curried and rest shifted to the start. When it's not specified, the permutation function will fall back to the amount of arguments provided.

Let's create a simple permutable function based on the non-commutative operation of subtraction.

```typescript
import { permutation2 } from 'fnts/permutation';

function subt(b: number): (a: number) => number;

function subt(a: number, b: number): number;

function subt(...args: [number, number?]) {
  return permutation2(
    (a: number, b: number): number => a - b
  )(...args);
}
```

Another way to make an overload is to utilize an interface and an arrow function:

```typescript
import { permutation2 } from 'fnts/permutation';

interface Subt {
  (b: number): (a: number) => number;
  
  (a: number, b: number): number;
}

const subt = (permutation2(
    (a: number, b: number): number => a - b
)) as Subt;
```

Now, our brand new `subt` can be used both without the permutation, as a regular binary function, or with it, if only we desire:

```typescript
const minusOne = subt(1);

const amount = subt(1000, 123);

const decrements = [1, 123, 1000].map(minusOne);
```
