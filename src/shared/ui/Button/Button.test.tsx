import { render, screen } from '@testing-library/react';
import React from "react";
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('Should render button', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Should have certain class', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});