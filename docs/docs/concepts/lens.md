---
id: lens
slug: /concepts/lens
title: Lens
---

There's a pattern in functional programming called "lenses". `fnts` brings two necessary functions
for this pattern to work, although in a simplified manner, – `get` and `set`.

Both of them are similar to what Lodash has to offer, it was just really intereseting to build them on my own.

## get

`get` function can be used to get a value from inside an array/object:

```typescript
import get from 'fnts/lens/get';

const object = {
  a: {
    b: {
      c: 1
    }
  }
};

const value = get(object, 'a.b.c'); // 1
```

Morevoer, you can access values deeply nested inside arrays:

```typescript
import get from 'fnts/lens/get';

const object = {
  a: {
    b: [
      { c: 0 },
      { c: 1 },
      { c: 2 },
      { c: 3 },
    ]
  }
};

const value = get(object, 'a.b.c.1'); // 1
```

## set

Same as with `get`, you can use dot-notation access on nested object to modify
a value at the provided path.

```typescript
import set from 'fnts/lens/set';

const object = {
  a: {
    b: [
      { c: 0 },
      { c: 1 },
      { c: 2 },
      { c: 3 },
    ]
  }
};

const objectCopy = set(object, 'a.b.c.1', 4);
```

Returned value will be a deep copy of the original object made using [`structuredClone`](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)
which, of course, includes the modified value.

## lens

To create lenses themselves, you'd need to use the source-first argument application for `get` and `set`:

```typescript
import get from 'fnts/lens/get';
import set from 'fnts/lens/set';

const object = {
  a: {
    b: [
      { c: 0 },
      { c: 1 },
      { c: 2 },
      { c: 3 },
    ]
  }
};

const objectLens = {
  get: get(object),
  set: set(object),
};

const value = objectLens.get('a.b.c.1'); // 1
const objectCopy = objectLens.set('a.b.c.1', 4);
```

Or, simply use the `lens` function!

```typescript
import lens from 'fnts/lens';

const object = {
  a: {
    b: [
      { c: 0 },
      { c: 1 },
      { c: 2 },
      { c: 3 },
    ]
  }
};

const objectLens = lens(object);

const value = objectLens('a.b.c.1'); // 1
const objectCopy = objectLens('a.b.c.1', 4);
```
