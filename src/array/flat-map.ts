import { compose } from '../function';

import { map } from './map';
import { flat } from './flat';
import type { Transformer } from './array-callback';

export const flatMap = <T, R>(transformer: Transformer<T, R>) => compose(map<T, R>(transformer) as any, flat());
