/* eslint-disable i18next/no-literal-string */
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTypeTabs.module.scss';
import { ArticleType } from '../..';
import { TabItem, Tabs } from '../../../../shared/ui/Tabs/Tabs';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(
  (props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation('article');

    const typeTabs = useMemo<TabItem[]>(() => [
      {
        value: ArticleType.ALL,
        content: t('all'),
      },
      {
        value: ArticleType.IT,
        content: t('it'),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('economics'),
      },
      {
        value: ArticleType.SCIENCE,
        content: t('science'),
      },
    ], [t]);

    const onTabClick = useCallback((tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
      <Tabs
        className={classNames(cls.ArticleTypeTabs, {}, [className])}
        tabs={typeTabs}
        value={value}
        onTabClick={onTabClick}
      />
    );
  },
);
