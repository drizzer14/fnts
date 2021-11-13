import sut from '../src/conditional'
import type { Map } from '../src/.internal/map'

describe('conditional', () => {
  describe('when predicate returns "true"', () => {
    let left: Map<number, number>
    let right: jest.Mock
    let result: number

    beforeEach(() => {
      left = (value) => value + 1
      right = jest.fn()
      result = sut(
        () => true,
        left,
        right
      )(1)
    })

    it('should return value from "left"', () => {
      expect(result).toBe(2)
    })

    it('should not call "right"', () => {
      expect(right).not.toHaveBeenCalled()
    })
  })

  describe('when predicate returns "false"', () => {
    let left: jest.Mock
    let right: Map<number, number>
    let result: number

    beforeEach(() => {
      left = jest.fn()
      right = (value) => value + 1
      result = sut(
        () => false,
        left,
        right
      )(1)
    })

    it('should return value from "right"', () => {
      expect(result).toBe(2)
    })

    it('should not call "left"', () => {
      expect(left).not.toHaveBeenCalled()
    })
  })
})
