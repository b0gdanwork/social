/* eslint-disable react/jsx-props-no-spreading */
import { type ComponentStory, type ComponentMeta } from "@storybook/react"

import Dropdawn from "./Dropdawn"
import s from "./Dropdawn.module.scss"

export default {
	title: "shared/Dropdawn",
	component: Dropdawn,
} as ComponentMeta<typeof Dropdawn>

const Template: ComponentStory<typeof Dropdawn> = (args) => <Dropdawn {...args} />

export const Primary = Template.bind({})
Primary.args = {
	menuItems: [
		{
			children: "Крутаааа",
		},
		{
			children: "Привет всем",
		},
	],
	classNameWrapper: s.wrapperTest,
	innerButton: "btn",
}
