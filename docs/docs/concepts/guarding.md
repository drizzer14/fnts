---
id: guarding
slug: /concepts/guarding
title: Guarding
---

In computing there's a pattern called "guard". Specifically, Haskell has a dedicated [syntax](https://wiki.haskell.org/Pattern_guard) for that, which `fnts` also implemented in a more JavaScripty way:

```typescript
import guard from 'fnts/guard';

guard<(x: number) => number>(
  [(x) => x < 5, (x) => x + 1],
  [(x) => x === 5, (x) => x - 1], // we'll end up here eventually
  () => 1
)(5) // 4
```

The `guard` function accepts an arbitrary amount of arguments, each one, **except for the last**, should be a pair of a validator predicate (a function returning a boolean) and its corresponding expression. The qualifiers are checked one by one, and when encountering the validator that returns a truthy value, the expression next to it gets executed. All other qualifiers after it are ignored. If none of them is truthy, the last argument, which is a default expression, executes. All expressions must return the value of the same type.