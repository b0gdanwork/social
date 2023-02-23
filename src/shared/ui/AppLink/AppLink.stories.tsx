import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import AppLink from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => {
  return <div></div>
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'AppLink2'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'AppLink'
};
