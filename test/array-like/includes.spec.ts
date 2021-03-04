import { includes } from 'fnts/array-like';

describe ('includes', () => {
  describe ('array', () => {
    describe ('when the element is in the array', () => {
      it ('should return true', () => {
        expect (
          includes (1) ([1])
        ).toBe (true);
      });
    });

    describe ('when the element is not in the array', () => {
      it ('should return false', () => {
        expect (
          includes (2) ([1])
        ).toBe (false);
      });
    });
  });

  describe ('string', () => {
    describe ('when the substring is in the string', () => {
      it ('should return true', () => {
        expect (
          includes ('a') ('abc')
        ).toBe (true);
      });
    });

    describe ('when the substring is not in the string', () => {
      it ('should return false', () => {
        expect (
          includes ('d') ('abc')
        ).toBe (false);
      });
    });
  });
});
