import { curry2 } from '../.internal/curry-2'
import { just, Maybe, nothing } from '../monad/maybe'

export interface SearchFn {
  (regexp: string | RegExp): (string: string) => Maybe<number>

  (string: string, regexp: string | RegExp): Maybe<number>
}

export const search = curry2(
  (string: string, regexp: string | RegExp): Maybe<number> => {
    const index = string.search(regexp)

    return index < 0
      ? nothing()
      : just(index)
  },
) as SearchFn
