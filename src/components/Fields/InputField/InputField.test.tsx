import { render, screen } from '@testing-library/react';

import InputField from './InputField';

describe('InputField', () => {
  const mockInputProps = {
    name: 'testField',
    onChange: jest.fn(),
    onBlur: jest.fn(),
    ref: jest.fn(),
  };

  it('renders input with placeholder and no error', () => {
    const { container } = render(
      <InputField
        inputProps={mockInputProps}
        inputClassName="input-class"
        placeholder="Enter text"
      />,
    );

    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(screen.queryByText(/.+/)).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('applies inputClassName', () => {
    const { container } = render(
      <InputField inputProps={mockInputProps} inputClassName="custom-input" />,
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-input');
    expect(container).toMatchSnapshot();
  });

  it('renders error message if error provided', () => {
    const { container } = render(
      <InputField
        inputProps={mockInputProps}
        inputClassName="input-class"
        error="Error message"
      />,
    );

    expect(screen.getByText('Error message')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
