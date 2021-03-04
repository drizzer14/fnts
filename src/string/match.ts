import { maybe, Maybe } from '../monad/maybe';

type Matcher = { [Symbol.match](string: string): RegExpMatchArray | null };

export function match (matcher: Matcher): (string: string) => Maybe<RegExpMatchArray>;

export function match (regexp: string | RegExp): (string: string) => Maybe<RegExpMatchArray>;

/**
 * Funtional implementation of `String.prototype.match`.
 * Wraps the matched value in the `Maybe` monad.
 */
export function match (matcher: string | RegExp | Matcher): (string: string) => Maybe<RegExpMatchArray> {
  return (string) => maybe (string.match (matcher as Matcher));
}
