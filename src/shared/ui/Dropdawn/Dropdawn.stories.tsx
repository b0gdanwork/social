/* eslint-disable react/jsx-props-no-spreading */
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import Dropdawn from './Dropdawn'

export default {
  title: 'shared/Dropdawn',
  component: Dropdawn
} as ComponentMeta<typeof Dropdawn>

const Template: ComponentStory<typeof Dropdawn> = (args) => <Dropdawn {...args} />

export const Primary = Template.bind({})
Primary.args = {
}

export const Error = Template.bind({})
Error.args = {
}

export const Error2 = Template.bind({})
Error2.args = {
}

export const Loading = Template.bind({})
Loading.args = {
}
