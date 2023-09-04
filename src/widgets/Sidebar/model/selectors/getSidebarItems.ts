import { createSelector } from '@reduxjs/toolkit';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import AboutIcon from 'shared/assets/icons/about-woman.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile-icon.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { getUserAuthData } from '../../../../entities/User';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: HomeIcon,
        text: 'home',
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'about',
      },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
          Icon: ProfileIcon,
          text: 'profile',
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          Icon: ArticleIcon,
          text: 'articles',
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
