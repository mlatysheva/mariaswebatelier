import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';
import 'app/styles/index.scss';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Enter text',
  value: '123456',
};
