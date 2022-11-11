import { useEffect, Suspense } from 'react';
import { addDecorator } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
// import { TranslationDecorator } from "../../src/shared/config/storybook/TranslationDecorator";
import { Theme } from '../../src/app/providers/ThemeProvider';
import i18n from '../../src/shared/config/i18n/i18nStorybook';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en-US', title: 'English' },
        { value: 'ru', title: 'Russian' },
      ],
      title: 'Locale',
    },
  },
};

const TranslationDecorator = (Story, context) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(TranslationDecorator);
// addDecorator(TranslationDecorator(context));
