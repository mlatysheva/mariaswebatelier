import { useTranslation } from 'react-i18next';
import { Page } from '../../../widgets/Page';

const AboutPage = () => {
  const { t } = useTranslation('about_page');
  return (
    <Page>
      <h1 className="hero-text">{t('about')}</h1>
    </Page>
  );
};

export default AboutPage;
