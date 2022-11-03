import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('Should render button', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Should have certain class', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
