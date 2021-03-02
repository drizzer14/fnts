import { safeDiv } from 'fnts/number/safe-div';

describe('safeDiv', () => {
  describe('when the divisor is not 0', () => {
    it('should perform the division of two provided operands', () => {
      expect(safeDiv(2)(4)).toBe(2);
    });
  });

  describe('when the divisor is 0', () => {
    it('should replace the divisor with 1 and return the dividend', () => {
      expect(safeDiv(0)(4)).toBe(4);
    });
  });
});
