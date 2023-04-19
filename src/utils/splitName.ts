export const splitName = (name?: string): string => {
  if (name) {
    const split = name.split(' ')
    return split[0]
  }
  return ''
}
