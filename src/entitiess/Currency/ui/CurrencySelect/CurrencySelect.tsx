import { Currency } from '../../types/currency'
import { AppSelect } from 'shared/ui'
import { type PropsAppSelect } from 'shared/ui/AppSelect/AppSelect'

interface PropsCurrencySelect extends PropsAppSelect {
  className?: string,
  [x: string]: any
}

const options: any = Object.entries(Currency).map((key) => {
  return { value: key[0], label: key[0] }
})

export default function CurrencySelect (props: PropsCurrencySelect) {

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
