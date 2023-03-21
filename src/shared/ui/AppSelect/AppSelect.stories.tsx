/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/jsx-props-no-spreading */
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import AppSelect from './AppSelect'

export default {
  title: 'shared/AppSelect',
  component: AppSelect
} as ComponentMeta<typeof AppSelect>

const Template: ComponentStory<typeof AppSelect> = (args) => <><AppSelect {...args} /></>

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export const Primary = Template.bind({})
Primary.args = {
  options,
  label: 'Select',
  value: 'vanilla'
}

export const Readonly = Template.bind({})
Readonly.args = {
  options,
  readOnly: true,
  value: 'vanilla'
}
