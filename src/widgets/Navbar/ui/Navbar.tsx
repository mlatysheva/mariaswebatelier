import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className || ''])}>
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.links}
        onClick={onToggleModal}
        type="button"
      >
        {t('login')}
      </Button>
      <Modal
        isOpen={isAuthModal}
        onClose={onToggleModal}
        // eslint-disable-next-line max-len, react/no-children-prop, i18next/no-literal-string
        children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cupiditate ratione adipisci velit eum eaque saepe nesciunt, officiis deleniti! Velit est nobis eveniet numquam nam beatae adipisci dicta amet nostrum."
      />
    </div>
  );
};
