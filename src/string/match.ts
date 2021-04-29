import { curry2 } from '../.internal/curry-2'
import { maybe, Maybe } from '../monad/maybe'

export type Matcher = { [Symbol.match] (string: string): RegExpMatchArray | null }

export interface MatchFn {
  (matcher: Matcher): (string: string) => Maybe<RegExpMatchArray>

  (string: string, matcher: Matcher): Maybe<RegExpMatchArray>

  (regexp: string | RegExp): (string: string) => Maybe<RegExpMatchArray>

  (string: string, regexp: string | RegExp): Maybe<RegExpMatchArray>
}

export const match = curry2(
  (
    string: string,
    matcher: string | RegExp | Matcher,
  ): Maybe<RegExpMatchArray> => {
    return maybe(string.match(matcher as Matcher))
  },
) as MatchFn
