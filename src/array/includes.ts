import { eq } from '../boolean';

import { some } from './some';

export const includes = <E>(element: E, fromIndex = 0) => some(eq(element), fromIndex);
