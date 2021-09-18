import compose from 'fnts/compose'
import identity from 'fnts/identity'
import either, { eitherSync } from 'fnts/either'
import { bimap, isLeft, isRight, bifoldMap } from 'fnts/either/operators'

describe('either', () => {
  const sut = either

  describe('when provided with a successful promise', () => {
    it('should create a `right` wrapper', async () => {
      expect(
        isRight(
          await sut(() => Promise.resolve())
        )
      ).toBe(true)
    })
  })

  describe('when provided with a failed promise', () => {
    it('should create a `right` wrapper', async () => {
      expect(
        isLeft(
          await sut(() => Promise.reject())
        )
      ).toBe(true)
    })
  })

  describe('operators', () => {
    describe('bimap', () => {
      describe('when provided with a `left` wrapper', () => {
        it('should execute only the `mapLeft` function', async () => {
          const mapLeft = jest.fn()
          const mapRight = jest.fn()

          bimap(
            await sut(() => Promise.reject('5')),
            mapLeft,
            mapRight
          )

          expect(mapLeft).toHaveBeenCalled()
          expect(mapRight).not.toHaveBeenCalled()
        })
      })

      describe('when provided with a `right` wrapper', () => {
        it('should execute only the `mapRight` function', async () => {
          const mapLeft = jest.fn()
          const mapRight = jest.fn()

          bimap(
            await sut(() => Promise.resolve()),
            mapLeft,
            mapRight
          )

          expect(mapRight).toHaveBeenCalled()
          expect(mapLeft).not.toHaveBeenCalled()
        })
      })
    })

    describe('bifoldMap', () => {
      describe('when provided with a `left` wrapper', () => {
        it('should execute only the `mapLeft` function', async () => {
          const mapLeft = jest.fn()
          const mapRight = jest.fn()

          bifoldMap(
            await sut(() => Promise.reject()),
            mapLeft,
            mapRight
          )

          expect(mapLeft).toHaveBeenCalled()
          expect(mapRight).not.toHaveBeenCalled()
        })

        it('should map and return the value', async () => {
          expect(
            bifoldMap(
              await sut<number, never>(() => Promise.reject(5)),
              (x) => x + 1,
              identity
            )
          ).toBe(6)
        })
      })

      describe('when provided with a `right` wrapper', () => {
        it('should execute only the `mapRight` function', async () => {
          const mapLeft = jest.fn()
          const mapRight = jest.fn()

          bifoldMap(
            await sut(() => Promise.resolve()),
            mapLeft,
            mapRight
          )

          expect(mapRight).toHaveBeenCalled()
          expect(mapLeft).not.toHaveBeenCalled()
        })

        it('should map and return the value', async () => {
          expect(
            bifoldMap(
              await sut(() => Promise.resolve(5)),
              identity,
              (x) => x + 1
            )
          ).toBe(6)
        })
      })
    })
  })
})

describe('eitherSync', () => {
  const sut = eitherSync

  describe('when a value function does not throw', () => {
    it('should create a `right` wrapper', () => {
      expect(
        isRight(
          sut(() => compose(
            JSON.parse,
            JSON.stringify
          )({ a: 1 }))
        )
      ).toBe(true)
    })
  })

  describe('when a value function throws', () => {
    it('should create a `right` wrapper', () => {
      expect(
        isLeft(
          sut(() => compose(
            JSON.parse,
            (jsonString: string) => `1${jsonString}`,
            JSON.stringify
          )({ a: 1 }))
        )
      ).toBe(true)
    })
  })
})
