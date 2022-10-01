import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from '../../../LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from '../../../ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
};

export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [props.className])}>
      <button onClick={onToggle}>
        Toggle
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  )
};