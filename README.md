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

Every function comes with its own module providing the named export of every public API 
and default export of the function itself:

```typescript
import compose from 'fnts/compose'
import maybe, { Maybe } from 'fnts/maybe'
```

Also, it is possible to import everything from the root by name:

```typescript
import { compose, maybe, identity } from 'fnts'
```

### Currying

The [curry](src/curry.ts) function is an attempt to create 
a generic currying without relying on overloads.
It supports the currying of functions with a set amount of arguments, 
as well as variadic functions or the functions with optional arguments.
The last two, though, require you to set the threshold upon which to curry them,
as JavaScript does not supply the information about the number of arguments
in those kinds of functions.

### Composition and pipelines

[Compose](src/compose.ts) and [pipe](src/pipe.ts) functions you'll encounter
here are pretty unique in their implementation, as they also are described 
generically rather than through overloads. 
If you encounter any unexpected behaviour in them, 
please feel free to create an [issue](https://github.com/drizzer14/fnts/issues).

### Monads

There are two commonly used monads in this package: 
[Maybe](src/maybe/maybe.ts) and [Either](src/either/either.ts).

Both have their own set of constructors, which rely upon special tags
represented through symbols – this way the "operators" know you pass them
the objects related to those monads 
(e.g. [just](src/maybe/maybe.ts) and [nothing](src/maybe/maybe.ts) from `Maybe` monad).

For both monads there are aforementioned operators, 
which can perform different transformations on their monads.
These operators look just like plain functions, so, 
if you are familiar with Haskell or RxJS, 
you should quickly get a grasp on them.

## Motivation

This project was made as a fun exercise around functional programming
principles. It comes nowhere near more serious projects described below as
alternatives, so treat it as the utility toy facilitating the approach to FP
in TypeScript.

## Alternatives

These projects would give you a decent representation of concepts `fnts`
tried to implement and compromise with.

- [fp-ts](https://github.com/gcanti/fp-ts)
- [ramda](https://github.com/ramda/ramda)
- [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide)
