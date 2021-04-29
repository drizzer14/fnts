import { xor as sut } from 'fnts/array'

describe('xor', () => {
  describe('when array is filled with truthy values only', () => {
    it('should return false', () => {
      expect(sut([true, true, true])).toBe(false)
    })
  })

  describe('when array is filled with falsy values only', () => {
    it('should return false', () => {
      expect(sut([false, false, false])).toBe(false)
    })
  })

  describe('when array is filled with both truthy and falsy values', () => {
    it('should return true', () => {
      expect(sut([true, false, true])).toBe(true)
    })
  })
})
