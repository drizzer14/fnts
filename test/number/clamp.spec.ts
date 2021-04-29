import { clamp as sut } from 'fnts/number'

describe('clamp', () => {
  describe('when the number is between min and max', () => {
    it('should return the number', () => {
      expect(sut(1, 3)(2)).toBe(2)
    })
  })

  describe('when the number is equal to min', () => {
    it('should return the number', () => {
      expect(sut(1, 3)(1)).toBe(1)
    })
  })

  describe('when the number is equal to max', () => {
    it('should return the number', () => {
      expect(sut(1, 3)(3)).toBe(3)
    })
  })

  describe('when the number is less than min', () => {
    it('should return min', () => {
      expect(sut(1, 2)(0)).toBe(1)
    })
  })

  describe('when the number is greater than max', () => {
    it('should return max', () => {
      expect(sut(1, 2)(3)).toBe(2)
    })
  })
})
