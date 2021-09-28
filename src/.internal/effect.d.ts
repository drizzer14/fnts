export type Effect<Function extends (...args: any[]) => any> =
  (...args: Parameters<Function>) => void
