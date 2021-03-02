export const btw = (a: (x: number) => boolean, b: (x: number) => boolean) => (x: number) => a(x) && b(x);
