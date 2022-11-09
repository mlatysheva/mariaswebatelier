import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import {
  componentRender,
} from 'shared/config/tests/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('Should render Counter', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('Should increment on click', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('Should decrement on click', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    fireEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
