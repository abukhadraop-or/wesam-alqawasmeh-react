import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BlurSection from 'components/BlurSection/BlurSection';

describe('<BlurSection />', () => {
  it('should not be rendered for mobile view', () => {
    render(<BlurSection />);
    const container = screen.getByTestId('container');
    expect(container).not.toBeVisible();
  });
});
