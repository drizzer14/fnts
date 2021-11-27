---
id: side-effects
slug: /concepts/side-effects
title: Side Effects
---

For handling side effects there are a couple of functions, the underlying concept of which is to not interfere with the main execution flow:

```typescript
import inject from 'fnts/inject';

const computeAndLog = inject(
  compute,
  (...args) => console.log('Computing with args: ', args)
);

computeAndLog(1, 2, 3);
```

The above one, `inject`, makes sure to leave the original function as is, giving us the ability to perform a *side effect* on its every call.

A couple more, `tap` and `rethrow`, perform exactly that, only `tap` returns (passes through) the received argument, and `rethrow`, you've guessed it, rethrows an error. 

Both use `inject` under the hood, which means it can be used to create more side effect "creators", e.g. a simple logger, like in the example above:

```typescript
import inject from 'fnts/inject';

const logFn = inject(console.log);
```