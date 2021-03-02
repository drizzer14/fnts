import { id } from 'fnts/id';
import { incr } from 'fnts/number';
import { flatMap } from 'fnts/array';

describe('flatMap', () => {
  it('should flat n-dimensional array by 1 dimension', () => {
    expect(
      flatMap(id)([[1], [2], [3]])
    ).toStrictEqual([1, 2, 3]);
  });

  it('should apply transformation to each of array\'s elements', () => {
    expect(
      flatMap(incr)([[1], [2], [3]])
    ).toStrictEqual([2, 3, 4]);
  });
});
