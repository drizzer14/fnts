import { at } from 'fnts/string';

describe('at', () => {
  describe('when position is a positive number', () => {
    it('should return string\'s substring by the given position starting from 0', () => {
      expect(at(2)('abc')).toBe('c');
    });
  });

  describe('when position is a negative number', () => {
    it('should return string\'s substring by the given position starting from -1 from the right', () => {
      expect(at(-1)('abc')).toBe('c');
      expect(at(-3)('abc')).toBe('a');
    });
  });
});
