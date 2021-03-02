import { takel } from 'fnts/array';

describe('takel', () => {
  it('should return new array with specified amount of elements from the left', () => {
    expect(
      takel(2)([1, 2, 3, 4])
    ).toStrictEqual([1, 2]);
  });
});
