# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.1.1](https://github.com/drizzer14/fnts/compare/v2.1.0...v2.1.1) (2024-06-26)


### Bug Fixes

* fix guard re-export name ([d358991](https://github.com/drizzer14/fnts/commit/d358991a396dad84b53cd1ac346bf38e64203f57))

## [2.1.0](https://github.com/drizzer14/fnts/compare/v2.0.1...v2.1.0) (2023-12-13)


### Features

* add apply function ([51d074f](https://github.com/drizzer14/fnts/commit/51d074fa7009be26505b6e6eb3dc8395e834bda2))


### Bug Fixes

* **get:** enhance Flatten type condition ([be0b883](https://github.com/drizzer14/fnts/commit/be0b883f4470a412d4184c0b57b717fceeb4976e))
* **get:** guard object access with optional chaining ([23d7a5e](https://github.com/drizzer14/fnts/commit/23d7a5ee46e560406b05f77d999fc10e64d47a06))

### [2.0.1](https://github.com/drizzer14/fnts/compare/v2.0.0...v2.0.1) (2022-11-24)


### Bug Fixes

* **maybe:** restrict mapped `fmap` value from being nullable in resulting type ([95895eb](https://github.com/drizzer14/fnts/commit/95895eb6f6bb42af91993cf51b0cab7f3438b76e))

## [2.0.0](https://github.com/drizzer14/fnts/compare/v1.8.0...v2.0.0) (2022-11-23)


### ⚠ BREAKING CHANGES

* bump `typescript` peer dependency version to `>=4.7`
* remove `ternary` function
* **curry:** rename type `Currying` -> `Curry`
* **pipe:** accept only two functions at a time
* **compose:** accept only two functions at a time

### Features

* remove `ternary` function ([48f0b07](https://github.com/drizzer14/fnts/commit/48f0b07a79f70eacec4ed22f290a8d15b3d95a19))
* **compose:** accept only two functions at a time ([a521a3b](https://github.com/drizzer14/fnts/commit/a521a3b1c02635bdd6be7c129419881ff08417a2))
* **curry:** rename type `Currying` -> `Curry` ([78fca81](https://github.com/drizzer14/fnts/commit/78fca81d83c892cbb739f65b48a5f3e2436eb1e8))
* **either:** add `bifoldlMap` and `bifoldrMap` operators ([203fb26](https://github.com/drizzer14/fnts/commit/203fb26055b95a172049d32ff964baf90ed38a23))
* **either:** allow `isLeft` and `isRight` guards to accept any value ([768ad84](https://github.com/drizzer14/fnts/commit/768ad84a9af13e97ad45ccaddec1064747d097ae))
* **either:** allow `left` and `right` to not accept a value ([22a5c1c](https://github.com/drizzer14/fnts/commit/22a5c1c6d97d5c781430a43ea74c3f4b2bdff64f))
* **pipe:** accept only two functions at a time ([c28dae3](https://github.com/drizzer14/fnts/commit/c28dae35b600784dd361d201362abdae9448ec60))
* add `get` function ([292c68b](https://github.com/drizzer14/fnts/commit/292c68bb514b5dd1c2d442b18150a4f3701eb054))


### Bug Fixes

* **either:** improve operators type inference ([06a800f](https://github.com/drizzer14/fnts/commit/06a800f3e37bfd5666060e3e2567ecccde544bb6))
* **guard:** fix internal typings ([943d11c](https://github.com/drizzer14/fnts/commit/943d11c2c20aedd027777b9a69f3f833f7c6bf9b))
* **maybe:** improve type inference ([ab137ee](https://github.com/drizzer14/fnts/commit/ab137ee96748bfcb00711b23e082a25dd6ba1f3a))


### deps

* bump `typescript` peer dependency version to `>=4.7` ([4bfb251](https://github.com/drizzer14/fnts/commit/4bfb251389b031c1d363fcc18db414c7e81a6def))

## [1.8.0](https://github.com/drizzer14/fnts/compare/v1.6.0...v1.8.0) (2022-10-19)


### Features

* **compose:** allow the last function to have multiple arguments ([3ee087f](https://github.com/drizzer14/fnts/commit/3ee087f5cc6c7b1dafe0a922fc2d4be72821b55e))
* **pipe:** allow the first function to have multiple arguments ([b895446](https://github.com/drizzer14/fnts/commit/b895446e783a0ae9c34d36942ae55cdbb89416af))
* **rethrow:** make `effect` parameter optional ([b4edf8c](https://github.com/drizzer14/fnts/commit/b4edf8cd0ca07fcb14fce9eacdb70683106533ab))


### Bug Fixes

* **either:** fix `bifoldMap` first overload implementation ([20b4070](https://github.com/drizzer14/fnts/commit/20b40707f1f70a0058d8c4d0ee8259ccb13f7032))

## [1.7.0](https://github.com/drizzer14/fnts/compare/v1.6.0...v1.7.0) (2022-09-15)


### Features

* **compose:** allow the last function to have multiple arguments ([3ee087f](https://github.com/drizzer14/fnts/commit/3ee087f5cc6c7b1dafe0a922fc2d4be72821b55e))
* **pipe:** allow the first function to have multiple arguments ([b895446](https://github.com/drizzer14/fnts/commit/b895446e783a0ae9c34d36942ae55cdbb89416af))


### Bug Fixes

* **either:** fix `bifoldMap` first overload implementation ([20b4070](https://github.com/drizzer14/fnts/commit/20b40707f1f70a0058d8c4d0ee8259ccb13f7032))

## [1.6.0](https://github.com/drizzer14/fnts/compare/v1.5.3...v1.6.0) (2022-09-07)


### Features

* **either:** add `isEither` guard ([8db7e42](https://github.com/drizzer14/fnts/commit/8db7e423d1fa4651516046de0b847dd9dbed0b93))
* **either:** add new overloads for `bifoldMap` ([41dd485](https://github.com/drizzer14/fnts/commit/41dd485a7a1d4ab779017b2ab7c627ed638e70fa))
* **maybe:** add `isMaybe` guard ([8916af0](https://github.com/drizzer14/fnts/commit/8916af0574ef4dbeeb34f24dd202afa4b6385ec1))

### [1.5.3](https://github.com/drizzer14/fnts/compare/v1.5.2...v1.5.3) (2022-09-05)


### Bug Fixes

* **maybe:** strengthen operators' typing ([dea2523](https://github.com/drizzer14/fnts/commit/dea252316a490dc12651182f780b6575e36c40e0))

### [1.5.2](https://github.com/drizzer14/fnts/compare/v1.5.1...v1.5.2) (2022-09-02)


### Bug Fixes

* **maybe:** make constructor typing more predictable ([e247050](https://github.com/drizzer14/fnts/commit/e24705014671b8e835e4c68a21e3a692d1307b9f))

### [1.5.1](https://github.com/drizzer14/fnts/compare/v1.5.0...v1.5.1) (2022-08-03)

## [1.5.0](https://github.com/drizzer14/fnts/compare/v1.4.0...v1.5.0) (2022-08-02)


### Features

* **either:** add `bindr` operator ([899ac91](https://github.com/drizzer14/fnts/commit/899ac9191786d5b78a49f61bc06a7a596777a08e))

## [1.4.0](https://github.com/drizzer14/fnts/compare/v1.3.3...v1.4.0) (2022-01-24)


### Features

* **either:** make `left` and `right` serializable ([591537f](https://github.com/drizzer14/fnts/commit/591537f90c43dc32f517bf6c429b545992e1d212))
* **maybe:** make `just` and `nothing` serializable ([3fe826f](https://github.com/drizzer14/fnts/commit/3fe826f9eb573afcabdd03aa744ff8334756f5ee))

### [1.3.3](https://github.com/drizzer14/fnts/compare/v1.3.2...v1.3.3) (2022-01-24)


### Bug Fixes

* **maybe:** remove buggy overloads of `foldMap` ([184cd50](https://github.com/drizzer14/fnts/commit/184cd505546eef335d0f0c0b157b1f00466f8c58))

### [1.3.2](https://github.com/drizzer14/fnts/compare/v1.3.1...v1.3.2) (2021-12-28)


### Bug Fixes

* **curry:** remove broken `Args['length'] extends 1` condition ([5a48a55](https://github.com/drizzer14/fnts/commit/5a48a5580141784b1cc69e63745679e1d8da902f))
* get rid of ts-ignore from type declarations of compose and pipeline ([658514f](https://github.com/drizzer14/fnts/commit/658514f3d76b3ef7416f7a823d65f23ce562d1dc))

### [1.3.1](https://github.com/drizzer14/fnts/compare/v1.3.0...v1.3.1) (2021-11-28)

## [1.3.0](https://github.com/drizzer14/fnts/compare/v1.2.0...v1.3.0) (2021-11-27)


### Features

* update build, add `conditional`, remove named exports from sources ([b984fb3](https://github.com/drizzer14/fnts/commit/b984fb37eb520b7df8e7e441f29d676f00636d79))
* update source code ([707a512](https://github.com/drizzer14/fnts/commit/707a512b8452f6f2a49c9c24d03140c225074aa9))

## [1.2.0](https://github.com/drizzer14/fnts/compare/v1.0.1...v1.2.0) (2021-09-28)


### Features

* **either:** add `eitherSync` – synchronous version of `either` ([1a118e5](https://github.com/drizzer14/fnts/commit/1a118e54e5d23ad47c2e17fc5dc7f625b78d07fc))
* **inject:** add `inject` function ([acc0456](https://github.com/drizzer14/fnts/commit/acc0456ae42fd3a8fe0cdb47f1c5e61f7b51b9a5))
* **tap:** add `tap` function ([30804f1](https://github.com/drizzer14/fnts/commit/30804f197877bd90e828ca3e108bb979d768fab7))


### Bug Fixes

* **either:** add JSDoc comments ([72d45b6](https://github.com/drizzer14/fnts/commit/72d45b62e83d127b0616a9d192ca98a684873c37))
* remove excess `[@internal](https://github.com/internal)` JSDoc decorators ([a3680a2](https://github.com/drizzer14/fnts/commit/a3680a2a73aef2c22a025a905d3bb4b0516fc305))

## [1.1.0](https://github.com/drizzer14/fnts/compare/v1.0.1...v1.1.0) (2021-09-18)


### Features

* **either:** add `eitherSync` – synchronous version of `either` ([1a118e5](https://github.com/drizzer14/fnts/commit/1a118e54e5d23ad47c2e17fc5dc7f625b78d07fc))

### [1.0.2](https://github.com/drizzer14/fnts/compare/v1.0.1...v1.0.2) (2021-09-12)


### Bug Fixes

* **either:** add JSDoc comments ([72d45b6](https://github.com/drizzer14/fnts/commit/72d45b62e83d127b0616a9d192ca98a684873c37))
* remove excess `[@internal](https://github.com/internal)` JSDoc decorators ([a3680a2](https://github.com/drizzer14/fnts/commit/a3680a2a73aef2c22a025a905d3bb4b0516fc305))

### [1.0.1](https://github.com/drizzer14/fnts/compare/v1.0.0-rc.8...v1.0.1) (2021-09-06)


### Bug Fixes

* **either:** remove `[@internal](https://github.com/internal)` decorator from identifiers ([ac7d045](https://github.com/drizzer14/fnts/commit/ac7d045a241e04e998373ba71659ef3a456bdbdb))
* **maybe:** remove `[@internal](https://github.com/internal)` decorator from identifiers ([8148dc6](https://github.com/drizzer14/fnts/commit/8148dc6377d72a4fa3ea10e5c08bd6c3184f25da))

## [1.0.0](https://github.com/drizzer14/fnts/compare/v1.0.0-rc.8...v1.0.0) (2021-09-06)

🥳
