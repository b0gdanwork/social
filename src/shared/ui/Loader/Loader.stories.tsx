import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import Loader from './Loader';

export default {
  title: 'shared/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Loader'
};