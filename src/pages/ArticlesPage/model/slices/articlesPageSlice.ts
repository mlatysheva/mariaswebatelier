/* eslint-disable quote-props */
import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';
import { ArticlesPageSchema } from '../..';
import { fetchArticlesList } from '../services/fetchArticlesList';
import { SortOrder } from '../types/articlesPageSchema';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    view: ArticleView.TILE,
    ids: [],
    entities: {},
    page: 1,
    hasMore: true,
    _initialized: false,
    limit: 9,
    order: 'desc',
    sort: ArticleSortField.CREATED,
    search: '',
    type: ArticleType.ALL,
  }),
  reducers: {
    setView(state, action: PayloadAction<ArticleView>) {
      const view = action.payload;
      state.view = view;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
      state.limit = view === ArticleView.LIST ? 4 : 9;
    },
    initState: (state) => {
      const view = localStorage.getItem(
        ARTICLES_VIEW_LOCALSTORAGE_KEY,
      ) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.LIST ? 4 : 9;
      state._initialized = true;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setOrder(state, action: PayloadAction<SortOrder>) {
      state.order = action.payload;
    },
    setSort(state, action: PayloadAction<ArticleSortField>) {
      state.sort = action.payload;
    },
    setType(state, action: PayloadAction<ArticleType>) {
      state.type = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(
        fetchArticlesList.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.hasMore = action.payload.length >= state.limit;

          if (action.meta.arg.replace) {
            articlesAdapter.setAll(state, action.payload);
          } else {
            articlesAdapter.addMany(state, action.payload);
          }
        },
      )
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  reducer: articlesPageReducer,
  actions: articlesPageActions,
} = articlesPageSlice;
