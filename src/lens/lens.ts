/**
 * @module Lens
 */

import type { Flatten, Flattenable } from '../types'

import get, { Get } from './get';
import set, { Set } from './set';

/**
 * Creates a wrapper for a given `Source` type that provides access to both `get` and `set` functionalities for it,
 * effectively creating a functional lens.
 */
export interface Lens<Source extends Flattenable> {
    <
      Path extends Flatten<Source>
      // @ts-ignore
    > (path: Path): Get<Source, Path>;
    <
      Path extends Flatten<Source>,
      // @ts-ignore
      Value extends Get<Source, Path>
      // @ts-ignore
    > (path: Path, value: Value): Set<Source, Path, Value>;
  }

/**
 * Creates a wrapper for a given `source` that provides access to both `get` and `set` functionalities for it,
 * effectively creating a functional lens.
 */
export default function lens <Source extends Flattenable> (source: Source): Lens<Source> {
  const getter = get(source)
  const setter = set(source)

  // @ts-ignore
  return <Path extends Flatten<Source>, Value extends Get<Source, Path>> (
    ...args: [path: Path] | [path: Path, value: Value]
  ) => {
    // @ts-ignore
    return args.length === 1 ? getter(args[0]) : setter(args[0], args[1])
  }
}
