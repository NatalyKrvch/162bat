import { render } from '@testing-library/react';

import { SECTION_TITLE_TEST_ID } from '@/lib/testIds';

import SectionTitle from '../SectionTitle';

describe('SectionTitle', () => {
  it('renders children correctly', () => {
    const { getByTestId } = render(
      <SectionTitle>Історія Батальйону</SectionTitle>,
    );
    const heading = getByTestId(SECTION_TITLE_TEST_ID);
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Історія Батальйону');
  });

  it('matches snapshot', () => {
    const { container } = render(
      <SectionTitle>Історія Батальйону</SectionTitle>,
    );
    expect(container).toMatchSnapshot();
  });
});
