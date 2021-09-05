import sut from 'fnts/either'
import { bimap, isLeft, isRight } from 'fnts/either/operators'

describe('either', () => {
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
      describe('when the wrapper is `left`', () => {
        it('should execute `mapLeft` function', async () => {
          const mapLeft = jest.fn((error: unknown) => error)

          bimap(
            await sut(() => Promise.reject('5')),
            mapLeft,
            () => 1
          )

          expect(
            mapLeft
          ).toHaveBeenCalled()
        })
      })

      describe('when the wrapper is `right`', () => {
        it('should execute `mapRight` function', async () => {
          const mapRight = jest.fn((x: number) => x)

          bimap(
            await sut(() => Promise.resolve(5)),
            (error: unknown) => error,
            mapRight
          )

          expect(
            mapRight
          ).toHaveBeenCalled()
        })
      })
    })
  })
})
