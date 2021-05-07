import { safeDiv as sut } from 'fnts/number'

describe('safeDiv', () => {
  describe('when the divisor is not 0', () => {
    it('should perform the division of two provided operands', () => {
      expect(sut(4,2)).toBe(2)
    })
  })

  describe('when the divisor is 0', () => {
    it('should replace the divisor with 1 and return the dividend', () => {
      expect(sut(0)(4)).toBe(4)
    })
  })
})
