import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from '../../../../entities/Article';
import { ArticleSortField } from '../../../../entities/Article/model/types/article';

export type SortOrder = 'asc' | 'desc';
export interface ArticlesPageSchema extends EntityState<Article>{
  isLoading?: boolean;
  error?: string;
  view: ArticleView;

  // Pagination
  page: number;
  limit?: number;
  hasMore: boolean;

  _initialized?: boolean;

  // filters
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
}
