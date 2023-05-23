/* eslint-disable react/jsx-props-no-spreading */
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import Popover from './Popover'

export default {
  title: 'shared/Popover',
  component: Popover
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'Popover',
  btn: 'Btn'
}
