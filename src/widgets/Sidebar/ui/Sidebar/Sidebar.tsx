import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { LangSwitcher } from '../../../LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from '../../../ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { RoutePath } from '../../../../shared/config/routerConfig/routerConfig';
import AboutIcon from '../../../../shared/assets/icons/about-woman.svg';
import BurgerMenuIcon from '../../../../shared/assets/icons/burger-menu.svg';
import HomeIcon from '../../../../shared/assets/icons/home.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const { t } = useTranslation();
  const { className } = props;

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        cls.Sidebar,
        { [cls.collapsed]: collapsed },
        [className || ''],
      )}
    >
      <Button
        className={cls.collapseBtn}
        data-testid="sidebar-toggle"
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <AppLink
          className={cls.item}
          to={RoutePath.main}
          theme={AppLinkTheme.SECONDARY}
        >
          <HomeIcon className={cls.icon} />
          <span className={cls.link}>
            {t('home')}
          </span>
        </AppLink>
        <AppLink
          className={cls.item}
          to={RoutePath.about}
          theme={AppLinkTheme.SECONDARY}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>
            {t('about')}
          </span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};
