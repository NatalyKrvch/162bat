import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';

import MaskedField from './MaskedField';

describe('MaskedField', () => {
  const Wrapper = ({ error }: { error?: string }) => {
    const { control } = useForm();

    return (
      <MaskedField
        name="phone"
        control={control}
        rules={{ required: true }}
        error={error}
        mask="+{38} (000) 000-00-00"
        placeholder="Phone"
      />
    );
  };

  it('renders masked input correctly', () => {
    const { container } = render(<Wrapper />);

    const input = screen.getByPlaceholderText('Phone');
    expect(input).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('renders error message if error is provided', () => {
    const { container } = render(<Wrapper error="Invalid phone" />);

    expect(screen.getByText('Invalid phone')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
