import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('should render title.', () => {
    const { getByText } = render(<Button title="Title" />);
    const linkElement = getByText(/Title/i);
    expect(linkElement).toBeInTheDocument();
  });
});
