---
id: migrating-to-v3
slug: /migrating-to-v3
title: Migrating to v3
sidebar_position: 2
---

`fnts` 3.0.0 update is dedicated to bringing it up to date
with TypeScript, introducing real ESM and one organizational breaking change.

## TypeScript version bump

Make sure to use `fnts@2` with TypeScript upgraded to at least 5th major
version. 4.x support is dropped from now on.

## ECMAScript Modules (ESM)

With 3.0.0, `fnts` is being distributed using ESM system.
Check your test and build tools configurations to make sure
they support ESM or at least can transform `fnts` independently.

## API changes

`get` and `set` functions were moved into the new module called `lens`.
This change is simply an organizational one (grouping two related functions together),
but nevertheless a breaking one.

`set` became more restricted in terms of `value` type – only the type from original object
is allowed to be set to a given key.

---

And that's it!

```shell
npm i fnts@latest
```

```shell
yarn add fnts@latest
```
