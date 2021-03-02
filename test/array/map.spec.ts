import { map } from 'fnts/array';
import { incr } from 'fnts/number';

describe('map', () => {
  it('should apply transformer to each element of the array', () => {
    expect(
      map(incr)([1, 2, 3])
    ).toStrictEqual([2, 3, 4]);
  });
});
