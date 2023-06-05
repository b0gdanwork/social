import { type ComponentStory } from "@storybook/react"
import { withRouter } from "storybook-addon-react-router-v6"

import AppLink from "./AppLink"
import { BiGame } from "react-icons/bi"

export default {
	title: "shared/AppLink",
	component: AppLink,
	decorators: [withRouter],
}

const Template: ComponentStory<typeof AppLink> = (args) => {
	return <AppLink {...args} to={"/"} />
}

export const Open = Template.bind({})

Open.args = {
	Icon: BiGame,
	isOpen: true,
	children: "AppLink",
}

export const Close = Template.bind({})

Close.args = {
	Icon: BiGame,
	isOpen: false,
	children: "AppLink",
}
