import { ComponentStory, ComponentMeta } from '@storybook/react';
import avatar from 'shared/assets/tests/AvatarImg.jpg';
import { ProfileCard } from './ProfileCard';
import 'app/styles/index.scss';
import { Country } from '../../../Country';
import { Currency } from '../../../Currency';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'latysma',
    age: 45,
    country: Country.Russia,
    firstname: 'Maria',
    lastname: 'Latysheva',
    city: 'Moscow',
    currency: Currency.RUB,
    avatar,
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
