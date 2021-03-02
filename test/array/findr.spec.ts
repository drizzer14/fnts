import { eq } from 'fnts/boolean';
import { lt } from 'fnts/number';
import { findr } from 'fnts/array';

describe('findr', () => {
  describe('when the element is present in the array', () => {
    it('should return last occurance of the element as just(element)', () => {
      expect(findr(lt(4))([1, 2, 3, 4, 5]).fold()).toBe(3);
    });
  });

  describe('when the element is not present in the array', () => {
    it('should return nothing()', () => {
      expect(findr(eq(1))([]).fold()).toBeUndefined();
    });
  });
});
