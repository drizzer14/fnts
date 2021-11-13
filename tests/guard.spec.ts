import sut from '../src/guard'

describe('guard', () => {
  describe('when encountering a truthy guard', () => {
    it('should execute the function within that guard', () => {
      expect(
        sut<(x: number) => number>(
          [(x) => x < 5, (x) => x + 1],
          [(x) => x === 5, (x) => x - 1],
          () => 1
        )(5)
      ).toBe(4)
    })

    it('should not check further guards', () => {
      const guardNotToBeCalled = jest.fn((x: number) => x < 5)

      sut<(x: number) => number>(
        [(x) => x === 5, (x) => x - 1],
        [guardNotToBeCalled, (x) => x + 1],
        () => 1
      )(5)

      expect(guardNotToBeCalled).not.toBeCalled()
    })
  })

  describe('when no truthy guards are present', () => {
    it('should execute the default function', () => {
      expect(
        sut<(x: number) => number>(
          [(x) => x < 5, (x) => x + 1],
          [(x) => x > 5, (x) => x - 1],
          () => 1
        )(5)
      ).toBe(1)
    })
  })
})
