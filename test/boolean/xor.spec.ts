import { xor as sut } from 'fnts/boolean'

describe('xor', () => {
  describe('when two operands are equal', () => {
    it('should return false', () => {
      [
        [1, 1],
        [0, 0],
      ].forEach(([a, b]) => {
        expect(sut(a, b)).toBe(false)
      })
    })
  })

  describe('when two operands are different', () => {
    it('should return true', () => {
      [
        [1, 0],
        [0, 1],
      ].forEach(([a, b]) => {
        expect(sut(a, b)).toBe(true)
      })
    })
  })
})
