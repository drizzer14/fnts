---
id: application
slug: /concepts/application
title: Application
---

`apply` function allows to call several functions on the same arguments provided to `apply`.

It assumes that all functions have the same amount of arguments as the first one and that their type is the same as the first one accepts.

Its return type is the tuple of return types of all the functions provided to it.

```typescript
import apply from 'fnts/apply';

apply(
    (a: number, b: number) => a + b,
    (a: number, b: number) => a - b,
    (a: number, b: number) => a / b,
    (a: number, b: number) => a * b,
)(3, 2); // [5, 1, 1.5, 6]
```
