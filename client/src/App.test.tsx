import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('should render the title', () => {
  render(<App />);
  const titleElement = screen.getByText('Spacetagram');
  expect(titleElement).toBeInTheDocument();
});
