import { Currency } from '../../types/currency'
import { AppSelect } from '@/shared/ui'
import { type PropsAppSelect } from '@/shared/ui/AppSelect/AppSelect'

const options = Object.entries(Currency).map((key) => {
  return { value: key[0] as Currency, label: key[0] }
})

export default function CurrencySelect (props: PropsAppSelect<Currency>) {

  return (
    <AppSelect
      {...props}
      options={options}

   />
  )
}
