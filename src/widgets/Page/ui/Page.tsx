import {
  memo, MutableRefObject, ReactNode, UIEvent, UIEventHandler, useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cls from './Page.module.scss';
import { useInfiniteScroll } from '../../../shared/lib/hooks/useInfiniteScroll';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';
import { getScrollPositionByPath, scrollPostionActions } from '../../../features/ScrollPosition';
import { useInitialEffect } from '../../../shared/lib/hooks/useInitialEffect';
import { StateSchema } from '../../../app/providers/StoreProvider';
import { useThrottle } from '../../../shared/lib/hooks/useThrottle';

interface PageProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
  const { children, className, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector(
    (state: StateSchema) => getScrollPositionByPath(state, pathname),
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollPostionActions.setScroll({
      position: e.currentTarget.scrollTop,
      path: pathname,
    }));
  }, 500);

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
      onScroll={onScroll}
      id={PAGE_ID}
    >
      {children}
      { onScrollEnd
        ? <div className={cls.trigger} ref={triggerRef} />
        : null }
    </section>
  );
});
