export default function tacit<Args extends any[], Return> (
  peek: (...args: Args) => Return,
  ...args: Args
): Return {
  return peek(...args)
}
