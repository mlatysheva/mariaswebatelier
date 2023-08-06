import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }:SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);
  const id = isAuth?.id;

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    (item.path === '/profile/') ? (
      <AppLink
        className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        to={`${item.path}${id}` || ''}
        theme={AppLinkTheme.SECONDARY}
      >
        <item.Icon className={cls.icon} />
        <span className={cls.link}>
          {t(item?.text)}
        </span>
      </AppLink>
    ) : (

      <AppLink
        className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        to={item.path || ''}
        theme={AppLinkTheme.SECONDARY}
      >
        <item.Icon className={cls.icon} />
        <span className={cls.link}>
          {t(item?.text)}
        </span>
      </AppLink>
    )
  );
});
