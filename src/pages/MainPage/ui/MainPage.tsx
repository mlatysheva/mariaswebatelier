/* eslint-disable i18next/no-literal-string */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { Counter } from 'entities/Counter';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      <BugButton />
      <h1 className="hero-text">{t('home')}</h1>
      <Counter />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cupiditate ratione adipisci velit eum eaque saepe nesciunt, officiis deleniti! Velit est nobis eveniet numquam nam beatae adipisci dicta amet nostrum.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cupiditate ratione adipisci velit eum eaque saepe nesciunt, officiis deleniti! Velit est nobis eveniet numquam nam beatae adipisci dicta amet nostrum.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cupiditate ratione adipisci velit eum eaque saepe nesciunt, officiis deleniti! Velit est nobis eveniet numquam nam beatae adipisci dicta amet nostrum.</p>
    </div>
  );
};

export default MainPage;
