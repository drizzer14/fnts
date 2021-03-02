import { eq } from '../boolean';

import { some } from './some';

export const included = <T>(array: T[]) => (element: unknown, fromIndex = 0): element is T => {
  return some(eq(element), fromIndex)(array);
}
