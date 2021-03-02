export const flat = (depth = 1) => <T>(array: T[]): T[] => {
  if (depth > 0) {
    const result: T[] = [];

    for (let index = 0; index < array.length; index += 1) {
      const current = array[index];

      if (current !== undefined) {
        result.push(...(
          Array.isArray(current)
            ? flat(depth - 1)(current)
            : [current]
        ));
      }
    }

    return result;
  }

  return array;
};
