import { render } from '@testing-library/react';

import { CHEVRON_TEST_ID } from '@/lib/testIds';

import Chevron from '../Chevron';

describe('Chevron', () => {
  it(' should render correctly by defoult', () => {
    const { getByTestId, container } = render(<Chevron />);
    const svg = getByTestId(CHEVRON_TEST_ID);
    expect(svg).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly with className prop', () => {
    const { getByTestId, container } = render(
      <Chevron className="stroke-main" />,
    );
    const svg = getByTestId(CHEVRON_TEST_ID);
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass('stroke-main');
    expect(container.firstChild).toMatchSnapshot();
  });
});
