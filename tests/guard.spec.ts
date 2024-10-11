import sut from '../src/guard'

describe('guard', () => {
  describe('when encountering a truthy guard', () => {
    it('should execute the function next to that guard', () => {
      expect(
        sut(
          [(x) => x < 5, (x: number) => x + 1],
          [(x) => x === 5, (x) => x - 1],
          () => 1
        )(5)
      ).toBe(4)
    })

    it('should not check further guards', () => {
      const guardNotToBeCalled = jest.fn((x: number) => x < 5)

      sut(
        [(x) => x === 5, (x: number) => x - 1],
        [guardNotToBeCalled, (x) => x + 1],
        () => 1
      )(5)

      expect(guardNotToBeCalled).not.toHaveBeenCalled()
    })
  })

  describe('when no truthy guards are present', () => {
    it('should execute the default function', () => {
      expect(
        sut(
          [(x) => x < 5, (x: number) => x + 1],
          [(x) => x > 5, (x) => x - 1],
          () => 1
        )(5)
      ).toBe(1)
    })
  })
})
