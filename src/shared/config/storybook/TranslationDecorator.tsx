import { Story } from '@storybook/react';
import { Suspense, useEffect } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../i18n/i18nStorybook';

interface ContextProps {
  globals: {
    locale: string;
  }
}

export const TranslationDecorator = (context: ContextProps) => (Component: Story) => {
  const { locale } = context.globals;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  console.log(`locale: ${locale}`);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={t('loading') as string}>
      <I18nextProvider i18n={i18n}>
        <Component />
      </I18nextProvider>
    </Suspense>
  );
};
