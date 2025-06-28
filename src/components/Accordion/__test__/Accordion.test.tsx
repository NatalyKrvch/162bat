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
    expect(accordion).toHaveClass('flex flex-col gap-4');

    accordionItems.forEach(item => {
      expect(accordion).toHaveTextContent(item.title);
    });
    expect(accordion).toHaveClass('flex flex-col gap-4');

    expect(container).toMatchSnapshot();
  });

  it('should open the first accordion item by default', () => {
    const { container, getByTestId } = render(
      <Accordion accordionItems={accordionItems} />,
    );

    const firstItemContent = getByTestId(
      `accordion-content-${accordionItems[0].id}`,
    );
    expect(firstItemContent).toHaveAttribute('data-state', 'open');

    if (typeof firstItemContent === 'string') {
      expect(firstItemContent).toHaveTextContent(accordionItems[0].content);
    }

    expect(container).toMatchSnapshot();
  });

  it('should open the correct item on click and close others', async () => {
    const { getByTestId } = render(
      <Accordion accordionItems={accordionItems} />,
    );

    for (let i = 1; i < accordionItems.length; i++) {
      const currentItem = accordionItems[i];
      const trigger = screen.getByText(currentItem.title);

      fireEvent.click(trigger);

      const opened = getByTestId(`accordion-content-${currentItem.id}`);
      expect(opened).toHaveAttribute('data-state', 'open');

      if (typeof currentItem.content === 'string') {
        expect(opened).toHaveTextContent(currentItem.content);
      }

      const allContentBlocks = screen.getAllByTestId(/accordion-content-/);
      const closedItems = allContentBlocks.filter(
        item =>
          item.getAttribute('data-testid') !==
          `accordion-content-${currentItem.id}`,
      );
      closedItems.forEach(item => {
        expect(item).toHaveAttribute('data-state', 'closed');
      });
    }
  });
});
