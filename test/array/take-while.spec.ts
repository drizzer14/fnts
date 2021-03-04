import { ltr } from 'fnts/order';
import { Predicate, takeWhile } from 'fnts/array';

describe ('takeWhile', () => {
  let result: number[];
  let predicate: Predicate<number>;

  beforeEach (() => {
    predicate = jest.fn (ltr (3));
    result = takeWhile (predicate) ([1, 2, 3, 4]);
  });

  it ('should return elements satisfying the predicate', () => {
    expect (result).toStrictEqual ([1, 2]);
  });

  it ('should terminate execution after the first element satisfying the predicate', () => {
    expect (predicate).toHaveBeenCalledTimes (3);
  });
});
