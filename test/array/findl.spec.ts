import { eq } from 'fnts/boolean';
import { gt } from 'fnts/number';
import { findl } from 'fnts/array';

describe('findl', () => {
  describe('when the element is present in the array', () => {
    it('should return first occurance of the element as just(element)', () => {
      expect(findl(gt(2))([1, 2, 3, 4, 5]).fold()).toBe(3);
    });
  });

  describe('when the element is not present in the array', () => {
    it('should return nothing()', () => {
      expect(findl(eq(1))([]).fold()).toBeUndefined();
    });
  });
});
