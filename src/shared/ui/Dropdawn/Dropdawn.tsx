import { type CSSProperties, memo, type ReactNode } from 'react'
import { Menu } from '@headlessui/react'

import s from './Dropdawn.module.scss'
import { classNames } from '@/shared/lib/helpers/classNames/classNames'

export interface DropdawnItem {
  classNameListItem?: string
  children: ReactNode
  onClick?: () => void
  styleActive?: CSSProperties
}

interface PropsDropdawn {
  menuItems: DropdawnItem[]
  innerButton: ReactNode
  classNameItem?: string
}

function Dropdawn (props: PropsDropdawn) {

  const {
    menuItems,
    innerButton,
    classNameItem
  } = props

  const renderItems = (item: DropdawnItem, ind: number) => {
    return (
      <Menu.Item key={ind}>
        {({ active }) => (
          <div
            onClick={item.onClick}
            style={active ? item.styleActive : undefined}
            className={classNames(s.item, { [s.active]: active, classNameItem }, [item.classNameListItem])}
          >
            {item.children}
          </div>
        )}
      </Menu.Item>
    )
   
  }

  const renderMenuItems = () => {
    if (!menuItems.length) {
      return <></>
    }
    return menuItems.map((item, index) => renderItems(item, index))
  }

  return (
    <div className={s.wrapper}>
      <Menu>
        <Menu.Button>
          {innerButton}
        </Menu.Button>
        <Menu.Items 
          className={s.list}
        >
          {renderMenuItems()}
        </Menu.Items>
      </Menu>
    </div>
  )
}

export default memo(Dropdawn)
