import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { DIVIDER_TEST_ID } from '@/lib/testIds';

import Divider from '../Divider';

describe('Divider Component', () => {
  test('renders correctly with gradient variant', () => {
    const { container, getByTestId } = render(<Divider variant="gradient" />);

    const divider = getByTestId(DIVIDER_TEST_ID);
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('bg-divider-gradient');
    expect(divider.querySelector('span')).toHaveClass('divider-stripes-8');
    expect(container).toMatchSnapshot();
  });

  test('renders correctly with grey variant', () => {
    const { container, getByTestId } = render(<Divider variant="grey" />);

    const divider = getByTestId(DIVIDER_TEST_ID);
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('bg-divider-grey');
    expect(divider.querySelector('span')).toHaveClass('divider-stripes-4');
    expect(container).toMatchSnapshot();
  });

  test('renders correctly when no variant is provided', () => {
    const { container, getByTestId } = render(<Divider />);

    const divider = getByTestId(DIVIDER_TEST_ID);
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('bg-divider-gradient');
    expect(container).toMatchSnapshot();
  });
});
