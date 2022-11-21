import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about_page');
  return (
    <h1 className="hero-text">{t('about')}</h1>
  );
};

export default AboutPage;
