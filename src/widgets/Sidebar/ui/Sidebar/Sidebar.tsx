import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../../../../shared/ui/Button/Button';
import { LangSwitcher } from '../../../LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from '../../../ThemeSwitcher';
import cls from './Sidebar.module.scss';

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
        data-testid="sidebar-toggle"
        onClick={onToggle}
      >
        {t('toggle')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
