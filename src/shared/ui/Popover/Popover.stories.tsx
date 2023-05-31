/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/jsx-props-no-spreading */
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import Popover from './Popover'
import AppButton, { AppButtonTheme } from '../AppButton/AppButton'

export default {
  title: 'shared/Popover',
  component: Popover
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: <div style={{ backgroundColor: '#f0f', padding: 10 }}>Popover</div>,
  btn: <AppButton theme={AppButtonTheme.PRIMARY}>Btn</AppButton>
}
