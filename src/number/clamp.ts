export const clamp = (min: number, max: number) => (x: number) => Math.max(Math.min(x, max), min);
