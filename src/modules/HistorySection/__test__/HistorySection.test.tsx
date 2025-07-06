import { render, screen } from '@testing-library/react';

import HistorySection from '../HistorySection';

const mockData = {
  title: 'Our History',
  readMoreText: 'Read More',
  readMoreLink: '/history',
  introText: 'Intro paragraph about our history.',
  card: {
    title: 'Early Days',
    description: [
      { id: '1', text: 'Founded in 1990.' },
      { id: '2', text: 'Started with a small team.' },
    ],
  },
};

describe('HistorySection', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = render(<HistorySection data={mockData} />);

    expect(screen.getByText(mockData.title)).toBeInTheDocument();
    expect(screen.getByText(mockData.readMoreText)).toBeInTheDocument();
    expect(screen.getByText(mockData.introText)).toBeInTheDocument();
    expect(screen.getByText(mockData.card.title)).toBeInTheDocument();

    mockData.card.description.forEach(({ text }) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });
});
