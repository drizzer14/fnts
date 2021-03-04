import { included } from 'fnts/array-like';

describe ('included', () => {
  describe ('array', () => {
    describe ('included', () => {
      it ('should return true if the array has an element', () => {
        expect (
          included ([1]) (1)
        ).toBe (true);
      });

      it ('should return false if the array does not have an element', () => {
        expect (
          included ([1]) (2)
        ).toBe (false);
      });
    });
  });

  describe ('string', () => {
    describe ('included', () => {
      it ('should return true if the string has a substring', () => {
        expect (
          included ('abc') ('a')
        ).toBe (true);
      });

      it ('should return false if the string does not have a substring', () => {
        expect (
          included ('abc') ('d')
        ).toBe (false);
      });
    });
  });
});
