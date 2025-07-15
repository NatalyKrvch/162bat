import { render, screen } from '@testing-library/react';

import { TITLED_CARD_TEST_ID } from '@/lib/testIds';

import TitledCard from '../TitledCard';

const mockTitledCardText = [
  {
    id: 'tc-1',
    text: '29 березня 2018 року батальйон був створений у складі 119-ї бригади, яка об’єднала 43 загони територіальної оборони Чернігівщини.',
  },
  {
    id: 'tc-2',
    text: 'Ще в мирний час ми проводили регулярні навчання, щоб бути готовими до будь-яких викликів. В 2018 році проводились тактичні навчання “Північна фортеця - 2018”, які були організовані з використанням досвіду застосування військових частин територіальної оборони країн Балтії та скандинавських держав. У 2021 році понад 2 000 резервістів бригади, включно з нашими бійцями, взяли участь у масштабних навчаннях, готуючись до оборони регіону.',
  },
];

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
    expect(titleElement).toHaveClass('font-bold text-text-green');
    expect(titleElement).toHaveTextContent('Title');

    expect(container).toMatchSnapshot();
  });

  it('should render multiple paragraphs correctly', () => {
    const { container, getByTestId } = render(
      <TitledCard
        title="Title"
        titleColor="green"
        description={mockTitledCardText}
      />,
    );

    const titledCard = getByTestId(TITLED_CARD_TEST_ID);
    expect(titledCard).toBeInTheDocument();
    expect(titledCard).toHaveTextContent('Title');

    const titleElement = titledCard.querySelector('h3');
    expect(titleElement).toHaveClass('font-bold text-text-green');

    mockTitledCardText.forEach(item => {
      expect(titledCard).toHaveTextContent(item.text);
    });

    expect(container).toMatchSnapshot();
  });
});
