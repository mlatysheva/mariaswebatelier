import { Story } from "@storybook/react";
import { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/i18nStorybook";

interface ContextProps {
  globals: {
    locale: string;
  }
}

export const TranslationDecorator = (context: ContextProps) => (Component: Story) => {

  const {locale} = context.globals;

  console.log(`locale: ${locale}`);
  
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);
  
  return (
    <Suspense fallback="loading">
      <I18nextProvider i18n={i18n}>
        <Component />
      </I18nextProvider>
    </Suspense>
  );
};
 
