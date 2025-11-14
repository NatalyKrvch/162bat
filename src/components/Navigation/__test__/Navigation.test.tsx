import { render, screen } from '@testing-library/react';

import { NAVIGATION_TEST_ID } from '@/lib/testIds';

import Navigation from '../Navigation';
import { NavigationVariant } from '../Navigation.variants';

describe('Navigation', () => {
  it('should renders without crashing', () => {
    const { container } = render(
      <Navigation>
        <li>Item 1</li>
      </Navigation>,
    );
    const containerElement = screen.getByTestId(NAVIGATION_TEST_ID);

    expect(containerElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should apply correct aria-label based on variant', () => {
    render(
      <Navigation>
        <li>Header Item</li>
      </Navigation>,
    );
    const containerElement = screen.getByTestId(NAVIGATION_TEST_ID);
    expect(containerElement).toHaveAttribute('aria-label', 'header menu');
  });

  it('should apply correct aria-label based on variant - footer', () => {
    render(
      <Navigation variant={NavigationVariant.Footer}>
        <li>Footer Item</li>
      </Navigation>,
    );
    const containerElement = screen.getByTestId(NAVIGATION_TEST_ID);
    expect(containerElement).toHaveAttribute('aria-label', 'footer menu');
  });

  it('renders children correctly', () => {
    render(
      <Navigation>
        <li>Child Item</li>
      </Navigation>,
    );
    expect(screen.getByText('Child Item')).toBeInTheDocument();
  });
});
