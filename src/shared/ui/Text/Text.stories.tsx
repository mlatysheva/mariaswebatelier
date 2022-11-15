import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text, TextTheme } from './Text';
import 'app/styles/index.scss';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'Description for the text component',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Description for the text component',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  text: 'Description for the text component',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Description for the text component',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: 'Description for the text component',
  theme: TextTheme.ERROR,
};
