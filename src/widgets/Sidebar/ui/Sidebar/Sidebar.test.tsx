import { fireEvent, screen } from '@testing-library/react';
import React from "react";
import { Sidebar } from 'widgets/Sidebar';
import { 
  renderWithTranslation 
} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe('Sidebar', () => {
  test('Should render Sidebar', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();    
  });

  test('Should toggle Sidebar', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();  
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});