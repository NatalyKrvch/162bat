import { fireEvent, render, screen } from '@testing-library/react';

import { ACCORDION_TEST_ID } from '@/lib/testIds';

import Accordion from '../Accordion';

const mockAccordionItems = [
  {
    id: 'accordion-item-1',
    title: 'Mock Title 1',
    content: 'Mock content for item 1.',
  },
  {
    id: 'accordion-item-2',
    title: 'Mock Title 2',
    content: 'Mock content for item 2.',
  },
  {
    id: 'accordion-item-3',
    title: 'Mock Title 3',
    content: 'Mock content for item 3.',
  },
];

describe('Accordion', () => {
  it('should render accordion items correctly', () => {
    const { container, getByTestId } = render(
      <Accordion items={mockAccordionItems} />,
    );

    const accordion = getByTestId(ACCORDION_TEST_ID);
    expect(accordion).toBeInTheDocument();

    mockAccordionItems.forEach(item => {
      expect(accordion).toHaveTextContent(item.title);
    });
    expect(container).toMatchSnapshot();
  });

  it('should open the correct item on click and close others', () => {
    const { getByTestId } = render(<Accordion items={mockAccordionItems} />);

    for (const accordionItem of mockAccordionItems) {
      const trigger = screen.getByText(accordionItem.title);

      fireEvent.click(trigger);

      const opened = getByTestId(`accordion-content-${accordionItem.id}`);
      expect(opened).toHaveAttribute('data-state', 'open');

      if (typeof accordionItem.content === 'string') {
        expect(opened).toHaveTextContent(accordionItem.content);
      }

      const allContentBlocks = screen.getAllByTestId(/accordion-content-/);
      const closedItems = allContentBlocks.filter(
        item =>
          item.getAttribute('data-testid') !==
          `accordion-content-${accordionItem.id}`,
      );
      closedItems.forEach(item => {
        expect(item).toHaveAttribute('data-state', 'closed');
      });
    }
  });
});
