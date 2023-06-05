import { type ComponentStory, type ComponentMeta } from "@storybook/react"

import AppInput from "./AppInput"

export default {
	title: "shared/AppInput",
	component: AppInput,
} as ComponentMeta<typeof AppInput>

const Template: ComponentStory<typeof AppInput> = (args) => <AppInput {...args} />

export const Primary = Template.bind({})
Primary.args = {
	label: "label",
	value: "AppInput",
}

export const Empty = Template.bind({})
Empty.args = {
	label: "label",
	value: "",
}

export const Readonly = Template.bind({})
Readonly.args = {
	label: "label",
	value: "AppInput",
	readonly: true,
}
