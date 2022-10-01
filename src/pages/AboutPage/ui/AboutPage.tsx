import React from "react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t, i18n } = useTranslation('about_page');
  return (
    <div>
      <h1>{t('about')}</h1>
    </div>
  );
}

export default AboutPage;