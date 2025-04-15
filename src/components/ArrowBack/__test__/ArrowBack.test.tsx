import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { ARROW_BACK_TEST_ID } from '@/lib/testIds';

import ArrowBack from '../ArrowBack';

describe('ArrowBack component', () => {
  it('renders correctly with the correct test id and matches snapshot', () => {
    const { getByTestId, container } = render(<ArrowBack />);
    const svg = getByTestId(ARROW_BACK_TEST_ID);
    expect(svg).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
