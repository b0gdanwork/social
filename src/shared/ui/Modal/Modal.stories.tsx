import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import Modal from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Modal',
  isOpen: true,
  children: 'Modal'
};