import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { ARROW_FORWARD_TEST_ID } from '@/lib/testIds';

import ArrowForward from '../ArrowForward';

describe('ArrowForward component', () => {
  it('renders correctly with the correct test id and matches snapshot', () => {
    const { getByTestId, container } = render(<ArrowForward />);
    const svg = getByTestId(ARROW_FORWARD_TEST_ID);
    expect(svg).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
