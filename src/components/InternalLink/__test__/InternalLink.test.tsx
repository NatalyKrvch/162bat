import '@testing-library/jest-dom';

import { INTERNAL_LINK_TEST_ID } from '@components/testIds';
import { fireEvent, render, screen } from '@testing-library/react';

import InternalLink from '../InternalLink';
import { InternalLinkProps } from '../types';

jest.mock('next/link', () => {
  const MockLink = ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} data-testid="mocked-next-link" {...props}>
      {children}
    </a>
  );
  MockLink.displayName = 'MockNextLink';

  return MockLink;
});

describe('InternalLink Component', () => {
  const defaultProps: InternalLinkProps = {
    title: 'Test Link',
    href: '/test-page',
    className: 'custom-class',
  };

  it('renders the link with correct text and href', () => {
    const { container } = render(<InternalLink {...defaultProps} />);

    const linkElement = screen.getByTestId(INTERNAL_LINK_TEST_ID);

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/test-page');
    expect(linkElement).toHaveClass('custom-class');
    expect(container).toMatchSnapshot();
  });

  it('applies hover and active styles correctly', () => {
    const { container } = render(<InternalLink {...defaultProps} />);

    const linkElement = screen.getByTestId(INTERNAL_LINK_TEST_ID);

    fireEvent.mouseEnter(linkElement);
    expect(linkElement).toHaveClass('hover:text-btn-text-hover-secondary');

    fireEvent.mouseDown(linkElement);
    expect(linkElement).toHaveClass('active:text-btn-text-click-secondary');

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot', () => {
    const { container } = render(<InternalLink {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
