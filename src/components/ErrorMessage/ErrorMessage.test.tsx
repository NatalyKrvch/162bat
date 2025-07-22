import { render, screen } from '@testing-library/react';

import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders message when provided', () => {
    const { container } = render(<ErrorMessage message="Test error" />);

    expect(screen.getByText('Test error')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('applies custom className if provided', () => {
    const { container } = render(
      <ErrorMessage message="Test error" className="custom-class" />,
    );

    const element = screen.getByText('Test error');
    expect(element).toHaveClass('custom-class');
    expect(container).toMatchSnapshot();
  });

  it('returns null when no message provided', () => {
    const { container } = render(<ErrorMessage message={undefined} />);

    expect(container.firstChild).toBeNull();
    expect(container).toMatchSnapshot();
  });
});
