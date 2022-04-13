import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import BlurSection from 'components/BlurSection/BlurSection';

describe('<BlurSection />', () => {
  it('should not be rendered for mobile view', () => {
    render(<BlurSection />);
    const container = screen.getByTestId('container');
    expect(container).not.toBeVisible();
  });

  it('Renders on desktop', () => {
    render(<BlurSection />);
    const container = screen.getByTestId('container');
    expect(container.hidden).toBe(false);
  });

  it('Hide the section on scroll', () => {
    render(<BlurSection />);
    window.onscroll = jest.fn();
    expect(window.onscroll).not.toBeCalled();
  });

  it("Dosen't render blur effect initially", () => {
    render(<BlurSection />);
    const blur = screen.getByTestId('blur');
    expect(blur).not.toBeVisible();
  });

  it('Render blur effect', () => {
    render(<BlurSection />);
    const showMore = screen.getByTestId('show-more-icon');
    fireEvent.click(showMore);
    const blur = screen.getByTestId('blur');
    expect(blur.hidden).toBe(false);
  });

  it('Hide blur effect on scroll', () => {
    render(<BlurSection />);
    const showMore = screen.getByTestId('show-more-icon');
    fireEvent.click(showMore);
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    const blur = screen.getByTestId('blur');
    expect(blur).not.toBeVisible();
  });
});
