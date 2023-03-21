/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/jsx-props-no-spreading */
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import Avatar from './Avatar'

export default {
  title: 'shared/Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <><Avatar {...args} /></>

export const WithImg = Template.bind({})
WithImg.args = {
  width: 100,
  height: 100,
  src: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-devushek.jpg'
}

export const Empty = Template.bind({})
Empty.args = {
  width: 100,
  height: 100
}
