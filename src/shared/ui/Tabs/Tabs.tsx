import { memo, ReactNode, useCallback } from 'react';
import { classNames, Mods } from '../../lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem {
  value: string;
  content: ReactNode;
}

export interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const {
    className,
    tabs,
    value,
    onTabClick,
  } = props;

  const handleClick = useCallback((tab: TabItem) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className={cls.card}
          key={tab.value}
          onClick={handleClick(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
