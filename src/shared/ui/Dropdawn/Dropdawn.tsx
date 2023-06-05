import { type CSSProperties, memo, type ReactNode } from "react"
import { Menu } from "@headlessui/react"

import s from "./Dropdawn.module.scss"
import { classNames } from "@/shared/lib/helpers/classNames/classNames"

const Button = Menu.Button
const Items = Menu.Items

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
	classNameWrapper?: string
}

function Dropdawn(props: PropsDropdawn) {
	const { menuItems, innerButton, classNameItem, classNameWrapper } = props

	const renderItems = (item: DropdawnItem, ind: number) => {
		return (
			<Menu.Item key={ind}>
				{({ active }) => (
					<div
						onClick={item.onClick}
						style={active ? item.styleActive : undefined}
						className={classNames(
							s.item,
							{
								[s.active]: active,
								classNameItem,
							},
							[item.classNameListItem]
						)}
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
		<div className={classNames(s.wrapper, {}, [classNameWrapper])}>
			<Menu>
				<Button>{innerButton}</Button>
				<Items className={s.list}>{renderMenuItems()}</Items>
			</Menu>
		</div>
	)
}

export default memo(Dropdawn)
