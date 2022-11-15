import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { getUserAuthData, userActions } from '../../../entities/User';
import { LoginModal } from '../../../features/AuthByUsername';
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className || ''])}>
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.links}
          onClick={onLogout}
          type="button"
        >
          {t('logout')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className || ''])}>
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.links}
        onClick={onShowModal}
        type="button"
      >
        {t('login')}
      </Button>
      <LoginModal
        isOpen={isAuthModal}
        onClose={onCloseModal}
      />
    </div>
  );
};
