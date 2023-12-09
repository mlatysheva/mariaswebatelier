import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { use } from 'i18next';
import { AutoSizer, List, WindowScroller } from 'react-virtualized';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from '../../../../shared/ui/Text/Text';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.TILE ? 8 : 3)
  .fill(0)
  .map((_, index) => (
    <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
  ));

export const ArticleList = memo((props:ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.TILE,
    target,
  } = props;
  const { t } = useTranslation('article');

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      key={article.id}
      className={cls.card}
      target={target}
    />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('no_articles')} />
      </div>
    );
  }

  return (
    <WindowScroller
      onScroll={() => { console.log('onScroll'); }}
      scrollElement={document.getElementById('PAGE_ID') as Element}
    >
      {({ height, width }) => {
        <List
          height={height}
          rowCount={articles.length}
          rowHeight={500}
          // eslint-disable-next-line react/no-unstable-nested-components, i18next/no-literal-string
          rowRenderer={() => <div>Rows</div>}
          width={width}
        >
          {renderArticle}
        </List>;
      }}
    </WindowScroller>
  );
});
