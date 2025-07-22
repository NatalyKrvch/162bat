import { render, screen } from '@testing-library/react';

import TextareaField from './TextareaField';

describe('TextareaField', () => {
  const mockTextareaProps = {
    name: 'message',
    onChange: jest.fn(),
    onBlur: jest.fn(),
    ref: jest.fn(),
  };

  it('renders textarea with placeholder and no error', () => {
    const { container } = render(
      <TextareaField
        textareaProps={mockTextareaProps}
        placeholder="Enter message"
        className="custom-class"
      />,
    );

    const textarea = screen.getByPlaceholderText('Enter message');
    expect(textarea).toBeInTheDocument();
    expect(screen.queryByText(/.+/)).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('applies custom class and default styles', () => {
    const { container } = render(
      <TextareaField
        textareaProps={mockTextareaProps}
        className="extra-style"
      />,
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('extra-style');
    expect(textarea).toHaveClass('resize-none');
    expect(container).toMatchSnapshot();
  });

  it('renders error message when error provided', () => {
    const { container } = render(
      <TextareaField
        textareaProps={mockTextareaProps}
        error="Required field"
      />,
    );

    expect(screen.getByText('Required field')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
