import { Popover as PopoverLib } from '@headlessui/react'
import s from './Popover.module.scss'
import { type ReactNode } from 'react'

interface Props {
  btn: ReactNode,
  children: ReactNode
}

export default function Popover ({ children, btn }: Props) {
  return (
    <PopoverLib className={s.popover}>
      <PopoverLib.Button>
        {btn}
      </PopoverLib.Button>
      <PopoverLib.Panel className={s.panel}>
        {children}
      </PopoverLib.Panel>
    </PopoverLib>
  )
}
