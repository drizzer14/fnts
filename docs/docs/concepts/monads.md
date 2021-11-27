---
id: monads
slug: /concepts/monads
title: Monads
---

Out of the variety of monads `fnts` chooses two presumably most suitable ones: `maybe` and `either`. Each have their own constructors and operators (as opposed to classes and methods based approach seen commonly).

## Maybe

`maybe` constructor creates an instance of the `Maybe` monad. A nullable value (`undefined` or `null`) produces `Nothing`, any other value – `Just`. Each one is just a POJO with a single key – a unique identifier for the instance, by which it is recognised by some of the operators.

```typescript
import maybe from 'fnts/maybe';

const maybeNumber = maybe([1, 2, 3].find((n) => n > 2));
```

The `maybeNumber` variable here has a type `Maybe<number>` and holds a value of either `just` or `nothing`.

### Operators

There'd be no much use to it if we could still not perform any operations on `maybeNumber`. That's where operators come into play.

An operator is a special function that accepts an instance of the maybe monad and assumes an underlying value (a `number` in this case) to always be "real", throwing `undefined` or `null` away.

This way we can operate on it without having to worry about if it's truthy or not every time we have to do something with it.

In FP, the distinctive feature of a maybe monad is the `bind` operation, which acts similarly to `Promise.then` combining the accepted monad and the newly retuned one into a single `Maybe`:

```typescript
import maybe from 'fnts/maybe';
import { bind } from 'fnts/maybe/operators';

bind(
  maybeNumber,
  (n) => maybe(n * n)
); // Maybe<number>
```

Another common example of an operator for `Maybe` is `fmap`, which maps its value onto the new one and returns it wrapped into the monad again:

```typescript
import { fmap } from 'fnts/maybe/operators';

const maybeNumberIncremented = fmap(
  maybeNumber,
  (n) => n + 1
);
```

To get rid of the `Maybe` wrapping we utilise the `fold` operator:

```typescript
import { fold } from 'fnts/maybe/operators';

const numberIncremented = fold(maybeNumberIncremented);
```

A nice thing about `fold` is that it knows which specific constructor it received, and thus can infer the return type based on that information. Here, we can have `numberIncremented` to be of type `number` as long as we're sure the `maybeNumberIncremented` monad was just a `Just`.

## Either

Another cool monad in `fnts` is `Either`. It works basically the same as `Maybe`, having two constructors – `Left` and `Right` and a set of operators.

The `either` function accepts an asynchronous function in its argument, successful result of which becomes `Right`, and the thrown error – `Left`,

```typescript
import tap from 'fnts/tap';
import either from 'fnts/either';
import identity from 'fnts/identity';
import { bifoldMap } from 'fnts/either/operators';

bifoldMap(
  await either(
    () => fetch('https://github.com')
  ),
  tap(console.error),
  identity
)
```

## Synchronous either

For safely performing synchronous tasks that still may fail with an error, there is the `eitherSync` function:

```typescript
import eitherSync from 'fnts/either';
import { bifoldMap } from 'fnts/either/operators';

bifoldMap(
  eitherSync(
   () => JSON.parse(localStorage.getItem('context'))
  ),
  (error) => console.error(error),
  (data) => data
);
```

## Guards

Every monad instance can be validated through the pre-defined [type guard](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards) functions: `isJust`, `isNothing`, `isLeft`, `isRight`.

```typescript
import maybe from 'fnts/maybe';
import { isJust, fold } from 'fnts/maybe/operators';

isJust(maybeNumber)
  ? calculate(fold(maybeNumber)) // Just<number>
  : 0;
```

