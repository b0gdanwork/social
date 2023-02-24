import { type ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import AppLink from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  decorators: [withRouter]
};

const Template: ComponentStory<typeof AppLink> = (args) => {
  return <AppLink {...args} to={'/'}/>
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'AppLink',
  children: 'AppLink'
};