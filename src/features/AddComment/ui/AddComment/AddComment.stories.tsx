import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { action } from '@storybook/addon-actions';
import AddComment from './AddComment';
import 'app/styles/index.scss';

export default {
  title: 'features/AddComment',
  component: AddComment,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddComment>;

const Template: ComponentStory<typeof AddComment> = (args) => <AddComment {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onSendComment: action('onSendComment'),
};

Primary.decorators = [StoreDecorator({
  addComment: { text: 'Sample text' },
})];
