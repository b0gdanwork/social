/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/jsx-props-no-spreading */
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import Divider from './Divider'

export default {
  title: 'shared/Divider',
  component: Divider
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (args) => <> Empty block Divider <Divider {...args} /></>

export const Primary = Template.bind({})
Primary.args = {
}
