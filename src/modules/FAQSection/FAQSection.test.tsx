import { render, screen } from '@testing-library/react';

 
import FAQSection from './FAQSection';
import type { FAQSectionProps } from './types';
import { Item } from '@radix-ui/react-accordion';

const mockData: FAQSectionProps['data'] = {
  title: 'Часті питання',
  readMoreText: 'Дивитись деталі',
  readMoreLink: '/faq',
  items: [
    {
      question: 'З якого віку беруть в 162 бат ТРО?',
      answer: {
        text: 'Приєднатися до лав 162-ої бату ТРО  можна з 18-ти років.',
      },
    },
  ],
};

describe('FAQSection', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = render(<FAQSection data={mockData} />);

    expect(screen.getByText(mockData.title)).toBeInTheDocument();
    expect(screen.getByText(mockData.readMoreText)).toBeInTheDocument();
    expect(screen.getByText(mockData.items[0].question)).toBeInTheDocument();

    mockData.items.forEach(({ question }) => {
      expect(screen.getByText(question)).toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });
});
