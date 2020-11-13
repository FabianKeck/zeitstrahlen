import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders something', () => {
  // Given
  const { getByText } = render(<App />);
  // When
  const actual = getByText(/zeits/i);
  // Then
  expect(actual).toBeInTheDocument();
});
