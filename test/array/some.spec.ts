import { gt } from 'fnts/number';
import { some, Predicate } from 'fnts/array';

describe('some', () => {
  describe('when at least one element is true to the predicate', () => {
    let result: boolean;
    let predicate: Predicate<number>;

    beforeEach(() => {
      predicate = jest.fn(gt(2));
      result = some(predicate)([1, 2, 3, 4]);
    });

    it('should return true', () => {
      expect(result).toBe(true);
    });

    it('should terminate execution at the first element satisfying the predicate', () => {
      expect(predicate).toHaveBeenCalledTimes(3);
    });
  });

  describe('when no element is true to the predicate', () => {
    it('should return false', () => {
      expect(some(gt(2))([1, 2])).toBe(false);
    });
  });
});
