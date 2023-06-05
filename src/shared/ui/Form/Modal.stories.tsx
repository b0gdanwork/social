/* eslint-disable react/jsx-props-no-spreading */
import { type ComponentStory, type ComponentMeta } from "@storybook/react"

import Form from "./Form"

export default {
	title: "shared/Form",
	component: Form,
} as ComponentMeta<typeof Form>

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: "Form Form Form Form Form Form Form Form Form Form Form Form Form Form",
}

export const Error = Template.bind({})
Error.args = {
	children: "Form Form Form Form Form Form Form Form Form Form Form Form Form Form",
	error: "Error form",
}

export const Error2 = Template.bind({})
Error2.args = {
	children: "Form Form Form Form Form Form Form Form Form Form Form Form Form Form",
	error: ["error1", "error2"],
}

export const Loading = Template.bind({})
Loading.args = {
	children: "Form Form Form Form Form Form Form Form Form Form Form Form Form Form",
	error: undefined,
	isLoading: true,
}
