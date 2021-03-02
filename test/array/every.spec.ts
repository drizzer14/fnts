import { gt } from 'fnts/number';
import { every } from 'fnts/array';
import { Predicate } from 'fnts/array/array-callback';

describe('every', () => {
  let predicate: Predicate<number>;

  beforeEach(() => {
    predicate = jest.fn(gt(0));
  });

  describe('when every item in the array is true to the predicate', () => {
    it('should return true', () => {
      expect(every(predicate)([1, 2, 3])).toBe(true);
    });

    it('should call predicate for every element', () => {
      every(predicate)([1, 2, 3]);

      expect(predicate).toHaveBeenCalledTimes(3);
    });
  });

  describe('when at least one item in the array is not true to the predicate', () => {
    it('should return false', () => {
      expect(every(predicate)([1, -2, -3, -4, -5])).toBe(false);
    });

    it('should terminate execution at the first fail', () => {
      every(predicate)([1, -2, -3, -4, -5]);

      expect(predicate).toHaveBeenCalledTimes(2);
    });
  });
});
