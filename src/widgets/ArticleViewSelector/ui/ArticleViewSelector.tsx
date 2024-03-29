import React, { memo } from 'react';
import cls from './ArticleViewSelector.module.scss';
import ListIcon from '../../../shared/assets/icons/list-24-24.svg';
import TileIcon from '../../../shared/assets/icons/tiled-24-24.svg';
import { ArticleView } from '../../../entities/Article';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';
import { Icon } from '../../../shared/ui/Icon/Icon';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.TILE,
    icon: TileIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const {
    className,
    view,
    onViewClick,
  } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      { viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', { [cls.notSelected]: viewType.view !== view })}
          />
        </Button>
      ))}
    </div>
  );
});
