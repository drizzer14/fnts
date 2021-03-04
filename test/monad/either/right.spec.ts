import { compose } from 'fnts/function';
import { right } from 'fnts/monad/either';
import { decr, incr } from 'fnts/number';

describe ('right', () => {
  describe ('bind / ()', () => {
    describe ('when called with a function producing a monad', () => {
      it ('should return new either with produced value', () => {
        const monad = right (5) (compose (right, incr));

        expect (monad.isRight ()).toBe (true);
        expect (monad.fold ()).toBe (6);
      });
    });
  });

  describe ('map', () => {
    it ('should apply right mapping function', () => {
      expect (
        right (5).map (decr, incr).fold ()
      ).toBe (6);
    });
  });

  describe ('foldMap', () => {
    it ('should apply right mapping function and return contained value', () => {
      expect (
        right (5).foldMap (decr, incr)
      ).toBe (6);
    });
  });
});
