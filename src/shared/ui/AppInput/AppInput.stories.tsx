import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import AppInput from './AppInput'

export default {
  title: 'shared/AppInput',
  component: AppInput
} as ComponentMeta<typeof AppInput>

const Template: ComponentStory<typeof AppInput> = (args) => <AppInput {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'AppInput',
  value: 'AppInput'
}
