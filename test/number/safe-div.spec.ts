import { safeDiv } from 'fnts/number';

describe ('safeDiv', () => {
  describe ('when the divisor is not 0', () => {
    it ('should perform the division of two provided operands', () => {
      expect (safeDiv (4) (2)).toBe (2);
    });
  });

  describe ('when the divisor is 0', () => {
    it ('should replace the divisor with 1 and return the dividend', () => {
      expect (safeDiv (4) (0)).toBe (4);
    });
  });
});
