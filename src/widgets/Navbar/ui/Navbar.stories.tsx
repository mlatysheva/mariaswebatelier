import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';
import { Navbar } from "./Navbar";
import { ThemeDecorator } from "../../../shared/config/storybook/ThemeDecorator";
import { Theme } from "../../../app/providers/ThemeProvider/lib/ThemeContext";

export default {
  title: 'widgets/Narbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
