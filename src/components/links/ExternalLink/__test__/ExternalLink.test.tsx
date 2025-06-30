import { render, screen } from '@testing-library/react';

import { EXTERNAL_LINK_TEST_ID } from '@/lib/testIds';

import ExternalLink from '../ExternalLink';
import type { ExternalLinkProps } from '../types';

describe('ExternalLink Component', () => {
  const defaultProps: ExternalLinkProps = {
    title: 'Test External Link',
    href: 'https://example.com',
    className: 'custom-class',
  };

  it('renders the link with correct text and href', () => {
    const { container } = render(<ExternalLink {...defaultProps} />);

    const linkElement = screen.getByTestId(EXTERNAL_LINK_TEST_ID);

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
    expect(linkElement).toHaveClass('custom-class');
    expect(container).toMatchSnapshot();
  });

  test('renders children correctly', () => {
    const { container } = render(
      <ExternalLink {...defaultProps}>
        <div data-testid="child">Test Child</div>
      </ExternalLink>,
    );

    const childElement = screen.getByTestId('child');
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent('Test Child');
    expect(container).toMatchSnapshot();
  });

  it('applies "target" and "rel" attributes correctly for external links', () => {
    const { container } = render(<ExternalLink {...defaultProps} />);

    const linkElement = screen.getByTestId(EXTERNAL_LINK_TEST_ID);

    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
    expect(container).toMatchSnapshot();
  });
});
