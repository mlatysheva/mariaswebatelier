import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ArticleViewSelector } from 'widgets/ArticleViewSelector';
import {
  ArticleSortField, ArticleType, ArticleTypeTabs, ArticleView,
} from 'entities/Article';
import { Input } from 'shared/ui/Input/Input';
import { ArticleSortSelector } from 'widgets/ArticleSortSelector';
import cls from './ArticlesPageFilters.module.scss';
import {
  articlesPageActions,
} from '../../model/slices/articlesPageSlice';
import {
  getArticlesPageOrder,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { SortOrder } from '../../model/types/articlesPageSchema';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import { useDebounce } from '../../../../shared/lib/hooks/useDebounce';
import { TabItem, Tabs } from '../../../../shared/ui/Tabs/Tabs';

interface ArticlesPageFiltersProps {
  className?: string;
}

const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const type = useSelector(getArticlesPageType);

  const { t } = useTranslation('article');

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
    dispatch(articlesPageActions.setPage(1));
  }, [dispatch]);

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesPageActions.setSearch(search));
    dispatch(articlesPageActions.setPage(1));
    debouncedFetchData();
  }, [dispatch, debouncedFetchData]);

  const onchangeType = useCallback((type: ArticleType) => {
    dispatch(articlesPageActions.setType(type));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

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
        <Input onChange={onChangeSearch} placeholder={t('search')} />
      </Card>
      <ArticleTypeTabs
        value={type}
        onChangeType={onchangeType}
      />
    </div>
  );
});

export default ArticlesPageFilters;
