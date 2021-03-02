import { at } from 'fnts/array';

describe('at', () => {
  describe('when index is a positive number', () => {
    it('should return array\'s element by the given index starting from 0', () => {
      expect(at(2)([1, 2, 3])).toBe(3);
    });
  });

  describe('when index is a negative number', () => {
    it('should return array\'s element by the given index starting from -1 from the right', () => {
      expect(at(-1)([1, 2, 3])).toBe(3);
      expect(at(-3)([1, 2, 3])).toBe(1);
    });
  });
});
