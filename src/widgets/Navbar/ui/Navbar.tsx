import React from "react"
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className ? className : ''])}>
      <div className={cls.links}>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={cls.homeLink}>{t('home')}</AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>{t('about')}</AppLink>
      </div>
    </div>
  )
};
