export function toPx(...args: number[]) {
  return args.length > 1 ? args.reduce((pre, next) => pre + next) + 'px' : args[0] + 'px'
}
