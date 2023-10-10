import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ArticleViewSelector } from 'widgets/ArticleViewSelector';
import { ArticleSortField, ArticleView } from 'entities/Article';
import { Input } from 'shared/ui/Input/Input';
import { ArticleSortSelector } from 'widgets/ArticleSortSelector';
import cls from './ArticlesPageFilters.module.scss';
import {
  articlesPageActions,
} from '../../model/slices/articlesPageSlice';
import {
  getArticlesPageOrder,
  getArticlesPageSort,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { SortOrder } from '../../model/types/articlesPageSchema';

interface ArticlesPageFiltersProps {
  className?: string;
}

const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);

  const { t } = useTranslation('article');

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort));
  }, [dispatch]);

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder));
  }, [dispatch]);

  return (
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input placeholder={t('search')} />
      </Card>
    </div>
  );
});

export default ArticlesPageFilters;
