---
id: installation-and-usage
slug: /installation-and-usage
title: Installation and Usage
sidebar_position: 1
---

First, make to sure to have `typescript@4.2.2` installed, as otherwise the types won't work properly.

```shell
npm i fnts
```

```shell
yarn add fnts
```

Now, every function can be imported directly from its source location by a **default** import:

```typescript
import maybe from 'fnts/maybe';
import identity from 'fnts/identity';
```

Also, there's an `index.ts` file in the root of the project as well as in all underlying modules, allowing for **named** imports.

```typescript
import { left, Either } from 'fnts/either';
import { permutation2 } from 'fnts/permutation';
import { bifoldMap, first } from 'fnts/either/operators';
```
