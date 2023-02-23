import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import Navbar from './Navbar';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [withRouter],
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => {
  return <Navbar {...args}/>
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Navbar',
};