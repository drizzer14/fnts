import { gtr } from 'fnts/order';
import { comprehend } from 'fnts/array';
import { decr, incr } from 'fnts/number';

describe ('comprehend', () => {
  describe ('when predicate is not specified', () => {
    it ('should apply transformer to every element of the array', () => {
      expect (
        comprehend (
          incr,
        ) ([1, 2, 3])
      ).toStrictEqual ([2, 3, 4]);
    });
  });

  describe ('when predicate is specified', () => {
    it ('should apply predicate and transformer to every element of the array', () => {
      expect (
        comprehend (
          decr,
          gtr (2)
        ) ([1, 2, 3, 4, 5])
      ).toStrictEqual ([2, 3, 4]);
    });
  });
});
