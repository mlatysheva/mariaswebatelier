import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleSortSelector.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Select, SelectOption } from '../../../shared/ui/Select/Select';
import { ArticleSortField } from '../../../entities/Article/model/types/article';
import { SortOrder } from '../../../pages/ArticlesPage/model/types/articlesPageSchema';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
  } = props;
  const { t } = useTranslation('article');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('ascending'),
    },
    {
      value: 'desc',
      content: t('descending'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('created_on'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('title'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('views'),
    },
  ], [t]);

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        value={sort}
        options={sortFieldOptions}
        label={t('sort_by')}
        onChange={onChangeSort}
      />
      <Select
        value={order}
        options={orderOptions}
        label={t('by')}
        onChange={onChangeOrder}
        className={cls.order}
      />
    </div>
  );
});
