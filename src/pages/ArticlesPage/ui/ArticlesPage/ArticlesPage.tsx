import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { ArticleList } from '../../../../entities/Article';
import {
  DynamicModuleLoader,
  ReducersList,
} from '../../../../shared/lib/components/DynamicModuleLoader';
import {
  articlesPageReducer,
  getArticles,
} from '../../model/slices/articlesPageSlice';
import { useInitialEffect } from '../../../../shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch';
import {
  getArticlesPageIsLoading, getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage';
import { Page } from '../../../../widgets/Page';
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticlesPageFilters />
        <ArticleList
          className={cls.list}
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
