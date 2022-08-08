import React from 'react';
import { render } from '@testing-library/react';
import IndexTodolist from './IndexTodolist';

test('renders learn react link', () => {
  const { getByText } = render(<IndexTodolist />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
