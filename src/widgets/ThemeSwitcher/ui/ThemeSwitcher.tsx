import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from '../../../shared/ui/Icon/Icon';

interface ThemeSwitcherProps {
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classNames('', {}, ['theme-button'])}
    >
      {theme === Theme.DARK ? (
        <Icon Svg={DarkIcon} />
      ) : (
        <Icon Svg={LightIcon} />
      )}
    </Button>
  );
});
