/* eslint-disable i18next/no-literal-string */
/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { Page } from '../../../widgets/Page';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <BugButton />
      <h1 className="hero-text">{t('home')}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cupiditate ratione adipisci velit eum eaque saepe nesciunt, officiis deleniti! Velit est nobis eveniet numquam nam beatae adipisci dicta amet nostrum.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cupiditate ratione adipisci velit eum eaque saepe nesciunt, officiis deleniti! Velit est nobis eveniet numquam nam beatae adipisci dicta amet nostrum.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cupiditate ratione adipisci velit eum eaque saepe nesciunt, officiis deleniti! Velit est nobis eveniet numquam nam beatae adipisci dicta amet nostrum.</p>
    </Page>
  );
};

export default MainPage;
