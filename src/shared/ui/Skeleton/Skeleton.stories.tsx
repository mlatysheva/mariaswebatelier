import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Skeleton } from './Skeleton';
import 'app/styles/index.scss';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  width: '100%',
  height: '200px',
};

export const Circle = Template.bind({});
Circle.args = {
  border: '50%',
  width: 100,
  height: 100,
};

export const NormalDark = Template.bind({});
NormalDark.args = {
  width: '100%',
  height: '200px',
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
  border: '50%',
  width: 100,
  height: 100,
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalVintage = Template.bind({});
NormalVintage.args = {
  width: '100%',
  height: '200px',
};
NormalVintage.decorators = [ThemeDecorator(Theme.VINTAGE)];

export const CircleVintage = Template.bind({});
CircleVintage.args = {
  border: '50%',
  width: 100,
  height: 100,
};
CircleVintage.decorators = [ThemeDecorator(Theme.VINTAGE)];
