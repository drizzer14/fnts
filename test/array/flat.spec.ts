import { flat } from 'fnts/array/flat';

describe('flat', () => {
  describe('when depth (n) is specified', () => {
    it('should flatten the n-dimensional array to 1-dimensional', () => {
      expect(
        flat(2)([[1], [2], [3]])
      ).toStrictEqual([1, 2, 3]);
    });
  });

  describe('when depth is unspecified', () => {
    it('should flatten 1 dimension of the array', () => {
      expect(
        flat()([[[1]], [[2]], [[3]]])
      ).toStrictEqual([[1], [2], [3]]);
    });
  });

  describe('when array has <empty> slots', () => {
    it('should filter-out empty slots', () => {
      expect(
        flat()([1, , 2, , 3])
      ).toStrictEqual([1, 2, 3]);
    });
  });
});
