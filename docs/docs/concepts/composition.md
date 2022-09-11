---
id: composition
slug: /concepts/composition
title: Composition
---

Composition in `fnts` is represented through the `compose` and `pipe` functions.
Both are implemented without the overloads, which causes the types to be
rather *imposed* than inferred.

Commonly, as well as in `fnts`, `compose` is used to apply a list of functions
to an argument, passing the result of each application to the next one in a **
right to left** order:

```typescript
import compose from 'fnts/compose';

const isTwoDigits = compose(
  (b: boolean) => b ? 'true' : 'false',
  (s: string) => s.length === 2, // argument type imposed from the next function
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
  (n: number) => `${n}`,
  (s: string) => s.length === 2,
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
  (b: boolean) => b ? 'true' : 'false',
  (s: number) => s % 2 === 0,
  (a: number, b: number) => a + b,
);

isEvenSum(2, 2) === 'true';
isEvenSum(17, 32) === 'false';
```

---

An important thing to note here, once again, is that there are no overloads
present, so make to sure to have your functions properly typed and placed in a
right order. Otherwise `compose` and `pipe` will emit TypeScript errors
suggesting you to correct their types.

But fear not, as both use the same determination algorithm for types as you'd
expect: the return type of the previous function is the same as the argument
type of the next one.

---

One big downside to this, is that it is not always reliable with generic
functions. For example (taken from
the [issue](https://github.com/drizzer14/fnts/issues/16) on GitHub):

```typescript
import compose from 'fnts/compose';

declare const as: number[];

const cs = compose(
  (b) => b.toString(),
  (x) => x > 0
)(as);
```

`compose` here actually does not know anything about the types of `as` and the
functions' arguments it was provided. To fix this we need to manually annotate
the arguments which "fixes" the problem, although I don't think it's necessarily
a good way to use the library and TypeScript in general.

The issue above comes from
the [language itself](https://github.com/microsoft/TypeScript/issues/30369) and
at this moment in time cannot be fixed by the library.
