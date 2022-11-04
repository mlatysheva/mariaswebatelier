import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Sidebar } from 'widgets/Sidebar';
import {
  componentRender,
} from 'shared/config/tests/componentRender';

describe('Sidebar', () => {
  test('Should render Sidebar', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Should toggle Sidebar', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
