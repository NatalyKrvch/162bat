import { render } from '@testing-library/react';

import { ARROW_TEST_ID } from '@/lib/testIds';

import Arrow from '../Arrow';

describe('Arrow component', () => {
  it('renders correctly with "left" direction prop', () => {
    const { getByTestId, container } = render(<Arrow direction="left" />);
    const svg = getByTestId(ARROW_TEST_ID);
    expect(svg).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly with "right" direction prop', () => {
    const { getByTestId, container } = render(<Arrow direction="right" />);
    const svg = getByTestId(ARROW_TEST_ID);
    expect(svg).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
