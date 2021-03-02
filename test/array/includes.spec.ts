import { includes } from 'fnts/array';

describe('includes', () => {
  describe('when the element is in the array', () => {
    it('should return true', () => {
      expect(
        includes(1)([1])
      ).toBe(true);
    });
  });

  describe('when the element is not in the array', () => {
    it('should return false', () => {
      expect(
        includes(2)([1])
      ).toBe(false);
    });
  });
});
