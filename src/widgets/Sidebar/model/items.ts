import React from 'react';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import AboutIcon from 'shared/assets/icons/about-woman.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile-icon.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
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
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'profile',
  },
];
