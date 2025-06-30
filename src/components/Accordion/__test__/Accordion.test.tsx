import { fireEvent, render, screen } from '@testing-library/react';

import { accordionItems } from '@/data/mock/accordionItems';
import { ACCORDION_TEST_ID } from '@/lib/testIds';

import Accordion from '../Accordion';

describe('Accordion', () => {
  it('should render accordion items correctly', () => {
    const { container, getByTestId } = render(
      <Accordion accordionItems={accordionItems} />,
    );

    const accordion = getByTestId(ACCORDION_TEST_ID);
    expect(accordion).toBeInTheDocument();

    accordionItems.forEach(item => {
      expect(accordion).toHaveTextContent(item.title);
    });

    expect(container).toMatchSnapshot();
  });

  it('should open the correct item on click and close others', () => {
    const { getByTestId } = render(
      <Accordion accordionItems={accordionItems} />,
    );

    for (const accordionItem of accordionItems) {
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
