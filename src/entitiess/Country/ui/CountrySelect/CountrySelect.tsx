import { AppSelect } from '@/shared/ui'
import { Country } from './../../types/country'
import { type PropsAppSelect } from '@/shared/ui/AppSelect/AppSelect'

const options: any = Object.entries(Country).map((key) => {
  return { value: key[0], label: key[0] }
})

export default function CountrySelect (props: PropsAppSelect<Country>) {

  return (
    <AppSelect 
      {...props}
      options={options}

   />
  )
}
