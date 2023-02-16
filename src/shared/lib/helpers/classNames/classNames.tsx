export function classNames (
  mainClass?: string,
  mods?: Record<string, boolean>,
  additional?: string[]
): string {

  let returnClass = mainClass || ''

  for (const key in mods) {
    const valueKey = mods[key]
    if (valueKey) {
      returnClass = returnClass + ' ' + key
    }
  }

  additional?.forEach(item => { returnClass = returnClass + ' ' + item })

  return returnClass
}