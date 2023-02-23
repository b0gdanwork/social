import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import SideBar from './SideBar';

export default {
  title: 'widgets/SideBar',
  component: SideBar,
  
  // argTypes: {
    // label:{
    //   options: [SideBarTheme.PRIMARY, SideBarTheme.SECONDARY, SideBarTheme.TRANSPARENT],
    // },
  // }

} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => {
  return <SideBar {...args}/>
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'SideBar',
};