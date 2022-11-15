import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18nForTests';

export const TranslationDecorator = (Component: Story) => (
  <I18nextProvider i18n={i18n}>
    <Suspense fallback="">
      <Component />
    </Suspense>
  </I18nextProvider>
);
