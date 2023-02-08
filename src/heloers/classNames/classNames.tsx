
interface PropsT {
  mainClass?: string,
  mods?: {
    [key: string]: boolean;
  },
  additional?: string[]
}

export function className(
  mainClass?: string,
  mods?: {
    [key: string]: boolean;
  },
  additional?: string[]
  ): string {

  let returnClass = mainClass || ''

  for (let key in mods) {
    const valueKey = mods[key]
    if (valueKey) {
      returnClass = returnClass + ' ' + key
    }
  }

  additional && additional.forEach(item => returnClass = returnClass + ' ' + item)

  return returnClass
}