import { compose } from 'fnts/function';
import { left } from 'fnts/monad/either';
import { decr, incr } from 'fnts/number';

describe ('left', () => {
  describe ('bind / ()', () => {
    describe ('when called with a function producing a monad', () => {
      it ('should return new either with produced value', () => {
        const monad = left (5) (compose (left, incr));

        expect (monad.isLeft ()).toBe (true);
        expect (monad.fold ()).toBe (6);
      });
    });
  });

  describe ('map', () => {
    it ('should apply left mapping function', () => {
      expect (
        left (5).map (decr, incr).fold ()
      ).toBe (4);
    });
  });

  describe ('foldMap', () => {
    it ('should apply left mapping function and return contained value', () => {
      expect (
        left (5).foldMap (decr, incr)
      ).toBe (4);
    });
  });
});
