import { ComponentStory, ComponentMeta } from '@storybook/react';
import avatar from 'shared/assets/tests/AvatarImg.jpg';
import 'app/styles/index.scss';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  profile: {
    form: {
      username: 'latysma',
      age: 45,
      country: Country.Russia,
      firstname: 'Maria',
      lastname: 'Latysheva',
      city: 'Moscow',
      currency: Currency.RUB,
      avatar,
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      username: 'latysma',
      age: 45,
      country: Country.Russia,
      firstname: 'Maria',
      lastname: 'Latysheva',
      city: 'Moscow',
      currency: Currency.RUB,
      avatar,
    },
  },
})];
