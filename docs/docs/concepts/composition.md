---
id: composition
slug: /concepts/composition
title: Composition
---

Composition in `fnts` is represented through the `compose` and `pipe` functions.
Both accept two functions at a time, allowing for safer type inference which 
is not always possible with overloads or event without them (which happened 
in 1.x versions of `fnts`).

Commonly, as well as in `fnts`, `compose` is used to apply a list of functions
to an argument, passing the result of each application to the next one in a **
right to left** order:

```typescript
import compose from 'fnts/compose';

const isTwoDigits = compose(
  compose(
    (b: boolean) => b ? 'true' : 'false',
    (s: string) => s.length === 2 // argument type imposed from the next function
  ),
  (n: number) => `${n}`,
); // will accept only a number as argument

isTwoDigits(5) === 'false';
isTwoDigits(14) === 'true';
```

`pipe`, on the other hand, is executed in a more familiar **left to right**
order:

```typescript
import pipe from 'fnts/pipe';

const isTwoDigits = pipe(
  pipe(
    (n: number) => `${n}`,
    (s: string) => s.length === 2
  ),
  (b: boolean) => b ? 'true' : 'false',
);

isTwoDigits(5) === 'false';
isTwoDigits(14) === 'true';
```

Both `compose` and `pipe` allow for their first to-be-executed function to 
have multiple arguments.

```typescript
import compose from 'fnts/compose';

const isEvenSum = compose(
  compose(
    (b: boolean) => b ? 'true' : 'false',
    (s: number) => s % 2 === 0
  ),
  (a: number, b: number) => a + b,
);

isEvenSum(2, 2) === 'true';
isEvenSum(17, 32) === 'false';
```
