import { eq } from 'fnts/boolean';
import { findIndex } from 'fnts/array';

describe('findIndex', () => {
  describe('when the element is found', () => {
    it('should return just of this element\'s index', () => {
      expect(findIndex(eq(2))([1, 2, 3]).fold()).toBe(1);
    });
  });

  describe('when the element is not found', () => {
    it('should return nothing', () => {
      expect(findIndex(eq(4))([1]).fold()).toBeUndefined();
    });
  });
});
