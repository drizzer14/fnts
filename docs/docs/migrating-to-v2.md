---
id: migrating-to-v2
slug: /migrating-to-v2
title: Migrating to v2
sidebar_position: 2
---

After extensive use of `fnts` in real codebases, several problems and 
inconsistencies emerged. Version 2.0.0 of the library is dedicated to fixing 
these problems and introducing more consistent approaches for use of its 
modules.

## Version increment

One important thing to understand here is that the new major version introduces 
almost no drastic API changes. However, semantic versioning requires for any 
API change that is not backward compatible to bump the package version to a 
major, and so I did.

## TypeScript version bump

Make sure to use `fnts@2` with TypeScript upgraded to at least 4.7 minor
version. 4.2.2 support is dropped from now on.

## API changes

**`compose` and `pipe` now accept only two functions at a time** 

Variadic composition proved itself non-sustainable with types being inferred 
wrongly or not being inferred at all, causing the developer to write such 
a composition without the use of `compose` or `pipe` or trying to manually 
annotate composed functions in place, which resulted in more clutter and 
code that without `compose` or `pipe` at all.

```typescript
// before

compose(f, g, h, k)(...args)

pipe(k, h, g, f)(...args)

// after

compose(
  compose(f, g),
  compose(h, k)
)(...args)

pipe(
  pipe(k, h),
  pipe(g, f)
)(...args)
```

**Monad operators' interfaces are more straightforward now**

Attempts to guess input and output types of monad operators were reduced to 
just accepting generic monad constructors (`Maybe` and `Either`) and 
returning generic results (`Monad` and `Either`) instead of relying on 
concrete types (`Just`, `Nothing`, `Left`, `Right`) which in most cases 
could not be obtained within real use-cases.

```typescript
// before

type Fold<Monad extends Maybe<any>> =
  Monad extends Just<infer Value>
    ? Value
    : Monad extends Nothing
      ? undefined
      : never

function fold<Monad extends Maybe<any>> (
  monad: Monad
): Fold<Monad>

// after

type Fold<Monad extends Maybe<any>> =
  Monad extends Just<infer Value>
    ? Value
    : Monad extends Nothing
      ? undefined
      : Monad extends Maybe<infer Value>
        ? Value | undefined
        : never

function fold<Monad extends Just<any>> (
  monad: Monad
): Fold<Monad>

function fold<Value> (
  monad: Maybe<Value>
): Value | undefined
```

**`ternary` function got rekt**

Syntactic ternary operator `? :` provides more confidence and type safety 
than its functional counterpart, which, to me, has two major flaws:
1. No support for type guards.
2. Weak parameter inference.

This was enough to decide to remove it from the library entirely, since it 
brought no convenience, but rather problems and unsafety.

---

And that's it!

```shell
npm i fnts@latest
```

```shell
yarn add fnts@latest
```
