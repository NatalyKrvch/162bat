import { render } from '@testing-library/react';

import { data } from '@/data/guaranteesSection';
import {
  GUARANTEES_SECTION_TEST_ID,
  INTERNAL_LINK_TEST_ID,
} from '@/lib/testIds';

import GuaranteesSection from '../GuaranteesSection';

describe('GuaranteesSection', () => {
  const { title, subtitle, description, button } = data;

  it('renders correctly and matches snapshot', () => {
    const { container, getByText, getByTestId } = render(
      <GuaranteesSection data={data} />,
    );

    expect(getByTestId(GUARANTEES_SECTION_TEST_ID)).toBeInTheDocument();
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(subtitle)).toBeInTheDocument();
    expect(getByText(description.bold)).toBeInTheDocument();
    expect(getByText(description.normal)).toBeInTheDocument();
    expect(getByTestId(INTERNAL_LINK_TEST_ID).getAttribute('href')).toBe(
      button.url,
    );
    expect(container).toMatchSnapshot();
  });
});
