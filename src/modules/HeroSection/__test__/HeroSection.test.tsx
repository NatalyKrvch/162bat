import { type FormattedTextChild } from '@components/Cards/GuaranteeCard/types';
import { render } from '@testing-library/react';

import { HERO_SECTION_TEST_ID, INTERNAL_LINK_TEST_ID } from '@/lib/testIds';

import HeroSection from '../HeroSection';

describe('HeroSection', () => {
  const mockData: {
    sectionTitle: FormattedTextChild[];
    buttonTitle: string;
    buttonURL: string;
  } = {
    sectionTitle: [
      { id: '1', text: 'text1', color: 'white', fontWeight: 'bold' },
      { id: '2', text: 'text2', color: 'white', fontWeight: 'bold' },
      { id: '3', text: 'text3', color: 'white', fontWeight: 'bold' },
    ],
    buttonTitle: 'buttonTitle',
    buttonURL: 'buttonURL',
  };

  it('renders correctly and matches snapshot', () => {
    const { container, getByTestId } = render(<HeroSection data={mockData} />);

    const section = getByTestId(HERO_SECTION_TEST_ID);

    expect(section).toBeInTheDocument();
    expect(getByTestId(INTERNAL_LINK_TEST_ID)).toHaveAttribute(
      'href',
      mockData.buttonURL,
    );

    mockData.sectionTitle.forEach(({ text }) => {
      expect(section).toHaveTextContent(text);
    });

    expect(section).toHaveTextContent(mockData.buttonTitle.trim());

    expect(container).toMatchSnapshot();
  });
});
