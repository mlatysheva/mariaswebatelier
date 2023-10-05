/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { ArticleList, ArticleView } from '../../../../entities/Article';
import { DynamicModuleLoader, ReducersList } from '../../../../shared/lib/components/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { useInitialEffect } from '../../../../shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import {
  getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNumber, getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { ArticleViewSelector } from '../../../../widgets/ArticleViewSelector';
import { Page } from '../../../../shared/ui/Page/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage';

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
  const page = useSelector(getArticlesPageNumber);
  const hasMore = useSelector(getArticlesPageHasMore);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({
      page: 1,
    }));
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
