import { render } from '@testing-library/react';

import { data } from '@/data/heroSection';
import { HERO_SECTION_TEST_ID, INTERNAL_LINK_TEST_ID } from '@/lib/testIds';

import HeroSection from '../HeroSection';

describe('HeroSection', () => {
  const { title, button } = data;

  it('renders correctly and matches snapshot', () => {
    const { container, getByTestId } = render(<HeroSection data={data} />);
    const section = getByTestId(HERO_SECTION_TEST_ID);
    expect(section).toBeInTheDocument();
    expect(getByTestId(INTERNAL_LINK_TEST_ID)).toHaveAttribute(
      'href',
      button.url,
    );
    title.forEach(({ text }) => {
      expect(section).toHaveTextContent(text);
    });
    expect(section).toHaveTextContent(button.title.trim());
    expect(container).toMatchSnapshot();
  });
});
