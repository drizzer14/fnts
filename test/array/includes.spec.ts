import { includes as sut } from 'fnts/array'

describe('includes', () => {
  describe('when the element is in the array', () => {
    it('should return true', () => {
      expect(
        sut(1)([1]),
      ).toBe(true)
    })
  })

  describe('when the element is not in the array', () => {
    it('should return false', () => {
      expect(
        sut([1], 2),
      ).toBe(false)
    })
  })
})
