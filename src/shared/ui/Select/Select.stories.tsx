import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';
import 'app/styles/index.scss';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Country',
  options: [
    { value: '123', content: 'First point' },
    { value: '1234', content: 'Second point' },
  ],
};
