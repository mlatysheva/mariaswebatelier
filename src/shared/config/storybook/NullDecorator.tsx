import { Story } from '@storybook/react';

export const NullDecorator = () => (StoryComponent: Story) => (
  <div className="app">
    <StoryComponent />
  </div>
);
