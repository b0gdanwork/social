import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import SideBar from './SideBar';

export default {
  title: 'widgets/SideBar',
  component: SideBar

} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => {
  return <SideBar {...args}/>
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'SideBar'
};