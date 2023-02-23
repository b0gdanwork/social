import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import AppButton, { AppButtonTheme } from './AppButton';

export default {
  title: 'shared/AppButton',
  component: AppButton,
  
  // argTypes: {
    // label:{
    //   options: [AppButtonTheme.PRIMARY, AppButtonTheme.SECONDARY, AppButtonTheme.TRANSPARENT],
    // },
  // }
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => {
  return <AppButton {...args}/>
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'AppButton',
  children: "Button",
  args: {
    theme: AppButtonTheme.PRIMARY
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'AppButton',
  children: "Button",
  args: {
    theme: AppButtonTheme.SECONDARY
  }
};

export const Transparent = Template.bind({});
Transparent.args = {
  label: 'AppButton',
  children: "Button",
  args: {
    theme: AppButtonTheme.TRANSPARENT
  }
};