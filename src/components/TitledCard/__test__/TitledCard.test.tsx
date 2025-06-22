import { render, screen } from '@testing-library/react';

import { titledCardText } from '@/data/mock/titledCardText';
import { TITLED_CARD_TEST_ID } from '@/lib/testIds';

import TitledCard from '../TitledCard';

describe('TitledCard', () => {
  it('should render correctly with default props', () => {
    const { container, getByTestId } = render(
      <TitledCard
        title="Title"
        description="This is a titled card component."
      />,
    );

    const titledCard = getByTestId(TITLED_CARD_TEST_ID);
    expect(titledCard).toBeInTheDocument();
    expect(titledCard).toHaveTextContent('Title');

    const contentParagraph = screen.getByText(
      'This is a titled card component.',
    );
    expect(contentParagraph.tagName).toBe('P');

    expect(titledCard).toHaveClass('flex flex-col gap-4');
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with green title', () => {
    const { container, getByTestId } = render(
      <TitledCard
        title="Title"
        titleColor="green"
        description="This is a titled card component."
      />,
    );

    const titledCard = getByTestId(TITLED_CARD_TEST_ID);
    expect(titledCard).toBeInTheDocument();

    const titleElement = screen.getByRole('heading', { level: 3 });
    expect(titleElement).toHaveClass('text-2xl/7 font-bold text-text-green');
    expect(titleElement).toHaveTextContent('Title');

    expect(container).toMatchSnapshot();
  });

  it('should render multiple paragraphs correctly', () => {
    const { container, getByTestId } = render(
      <TitledCard
        title="Title"
        titleColor="green"
        description={titledCardText}
      />,
    );

    const titledCard = getByTestId(TITLED_CARD_TEST_ID);
    expect(titledCard).toBeInTheDocument();
    expect(titledCard).toHaveTextContent('Title');

    const titleElement = titledCard.querySelector('h3');
    expect(titleElement).toHaveClass('text-2xl/7 font-bold text-text-green');

    titledCardText.forEach(item => {
      expect(titledCard).toHaveTextContent(item.text);
    });

    expect(container).toMatchSnapshot();
  });
});
