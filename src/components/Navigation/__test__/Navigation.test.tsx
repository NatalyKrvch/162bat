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

  it('applies correct ul classes based on variant', () => {
    const { container, rerender } = render(
      <Navigation variant={NavigationVariant.Header}>
        <li>Header Item</li>
      </Navigation>,
    );
    const ul = container.querySelector('ul');
    expect(ul).toHaveClass('flex flex-col gap-6.75 lg:gap-0');

    rerender(
      <Navigation variant={NavigationVariant.Footer}>
        <li>Footer Item</li>
      </Navigation>,
    );
    expect(ul).toHaveClass('mb-10 flex flex-col gap-2 sm:flex-row md:gap-x-11');
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
