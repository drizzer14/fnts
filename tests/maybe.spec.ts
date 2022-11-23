import sut, { just, Maybe, nothing } from '../src/maybe'
import { bind, fmap, fold, isJust, isNothing, foldMap } from '../src/maybe/operators'

describe('maybe', () => {
  describe('when provided with a non-nullable value', () => {
    it('should create a `just` wrapper around the value', () => {
      expect(
        isJust(sut('non-nullable value'))
      ).toBe(true)
    })
  })

  describe('when provided with a nullable value', () => {
    it('should create a `nothing` wrapper with `undefined` value', () => {
      [
        sut(null),
        sut(undefined)
      ].forEach((value) => {
        expect(isNothing(value)).toBe(true)
      })
    })
  })

  describe('operators', () => {
    describe('bind', () => {
      describe('when provided with the `just` monad', () => {
        it('should unfold the transition function producing new `maybe` monad', () => {
          expect(
            isJust(
              bind(
                sut(5),
                (x) => just(x + 1)
              )
            )
          ).toBe(true)
        })
      })

      describe('when provided with the `nothing` monad', () => {
        it('should return provided `nothing` monad', () => {
          expect(
            isNothing(
              bind(
                sut<number>(undefined),
                (x) => just(x + 1)
              )
            )
          ).toBe(true)
        })
      })
    })

    describe('fmap', () => {
      describe('when provided with the `just` monad', () => {
        let monad: Maybe<string>

        beforeEach(() => {
          monad = fmap(
            sut(5),
            (x) => `${x + 1}`
          )
        })

        it('should produce new `maybe` monad', () => {
          expect(
            isJust(monad)
          ).toBe(true)
        })

        it('should apply the transition to the provided monad\'s value', () => {
          expect(
            fold(monad)
          ).toBe('6')
        })
      })
    })

    describe('fold', () => {
      describe('when provided with the `just` monad', () => {
        it('should return its wrapped value', () => {
          expect(
            fold(sut(5))
          ).toBe(5)
        })
      })

      describe('when provided with `nothing` monad', () => {
        it('should return `undefined`', () => {
          expect(
            fold(sut(undefined))
          ).toBe(undefined)
        })
      })
    })

    describe('foldMap', () => {
      describe('when provided with a `just` wrapper', () => {
        it('should map and return the wrapped value', () => {
          expect(
            foldMap(
              just(5),
              (x) => x + 1
            )
          ).toBe(6)
        })
      })

      describe('when provided with a `nothing` wrapper', () => {
        it('should return `undefined`', () => {
          expect(
            foldMap(
              nothing() as Maybe<number>,
              (x) => x + 1
            )
          ).toBe(undefined)
        })
      })
    })
  })
})
