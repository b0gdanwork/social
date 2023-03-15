export function classNames (
  mainClass?: string,
  mods?: Record<string, boolean | undefined>,
  additional?: Array<string | undefined>
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
