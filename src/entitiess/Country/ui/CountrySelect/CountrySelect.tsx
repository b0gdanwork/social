import { AppSelect } from '@/shared/ui'
import { Country } from './../../types/country'
import { type PropsAppSelect } from '@/shared/ui/AppSelect/AppSelect'

interface PropsCountrySelect extends PropsAppSelect {
  className?: string,
  [x: string]: any
}

const options: any = Object.entries(Country).map((key) => {
  return { value: key[0], label: key[0] }
})

export default function CountrySelect (props: PropsCountrySelect) {

  const {
    value,
    className,
    ...anyProps
  } = props

  return (
    <AppSelect 
      {...anyProps}  
      value={value}
      options={options}

   />
  )
}
