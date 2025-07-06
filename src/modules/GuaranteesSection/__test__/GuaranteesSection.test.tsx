import { render, screen } from '@testing-library/react';

import {
  GUARANTEES_SECTION_TEST_ID,
  INTERNAL_LINK_TEST_ID,
} from '@/lib/testIds';

import GuaranteesSection from '../GuaranteesSection';

const mockData = {
  title: 'Guarantees Title',
  subtitle: 'Your safety is our priority',
  description: {
    bold: '100% secure',
    normal: ' money-back guarantee within 30 days.',
  },
  button: {
    title: 'Learn More',
    url: '/guarantees',
  },
};

describe('GuaranteesSection', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = render(<GuaranteesSection data={mockData} />);

    expect(screen.getByTestId(GUARANTEES_SECTION_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(mockData.title)).toBeInTheDocument();
    expect(screen.getByText(mockData.subtitle)).toBeInTheDocument();
    expect(screen.getByText(mockData.description.bold)).toBeInTheDocument();
    expect(screen.getByTestId(INTERNAL_LINK_TEST_ID)).toHaveAttribute(
      'href',
      mockData.button.url,
    );
    expect(container).toMatchSnapshot();
  });
});
