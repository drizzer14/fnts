import { maybe } from 'fnts/monad/maybe';

describe ('maybe', () => {
  describe ('when value is null or undefined', () => {
    it ('should produce nothing', () => {
      [null, undefined].forEach ((value) => {
        const monad = maybe (value);

        expect (monad.isNothing ()).toBe (true);
        expect (monad.isJust ()).toBe (false);
      })
    });
  });

  describe ('when value is not nullable', () => {
    it ('should produce just of this value', () => {
      [
        0,
        1,
        '',
        'string',
        [],
        {},
        () => {},
        true,
        false,
        Symbol.for ('test')
      ].forEach ((value) => {
        const monad = maybe (value);

        expect (monad.isJust ()).toBe (true);
        expect (monad.isNothing ()).toBe (false);
        expect (monad.fold ()).toStrictEqual (value);
      })
    });
  });
});
