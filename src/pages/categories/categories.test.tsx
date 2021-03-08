import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pages/categories from './Pages/categories';

describe('<Pages/categories />', () => {
  test('it should mount', () => {
    render(<Pages/categories />);
    
    const pagesCategories = screen.getByTestId('Pages/categories');

    expect(pagesCategories).toBeInTheDocument();
  });
});