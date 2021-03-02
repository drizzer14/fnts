import { gt } from 'fnts/number';
import { filter } from 'fnts/array';

describe('filter', () => {
  it('should return array of elements that are true to the predicate', () => {
    const result = filter(gt(2))([1, 2, 3, 4, 5]);

    expect(result).toStrictEqual([3, 4, 5]);
  });
});
