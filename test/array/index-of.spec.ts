import { indexOf } from 'fnts/array';

describe('indexOf', () => {
  describe('when the element is in the array', () => {
    it('should return just of that element\'s first appearance index', () => {
      expect(
        indexOf(1)([1, 1]).fold()
      ).toBe(0);
    });
  });

  describe('when the element is not in the array', () => {
    it('should return nothing', () => {
      expect(
        indexOf(2)([1]).fold()
      ).toBeUndefined();
    });
  });
});
