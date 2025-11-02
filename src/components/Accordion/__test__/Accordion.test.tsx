import { fireEvent, render, screen } from '@testing-library/react';

import { ACCORDION_TEST_ID } from '@/lib/testIds';

import Accordion from '../Accordion';

const mockAccordionItem = {
  id: 'accordion-item-1',
  title: 'Mock Title',
  content: 'Mock content for the accordion.',
};

describe('Accordion', () => {
  it('should render accordion correctly', () => {
    const { container, getByTestId } = render(
      <Accordion {...mockAccordionItem} />,
    );

    const accordion = getByTestId(ACCORDION_TEST_ID);
    expect(accordion).toBeInTheDocument();
    expect(accordion).toHaveTextContent(mockAccordionItem.title);

    expect(container).toMatchSnapshot();
  });

  it('should open and close content on click', () => {
    render(<Accordion {...mockAccordionItem} />);

    const trigger = screen.getByText(mockAccordionItem.title);
    const content = screen.getByTestId(
      `accordion-content-${mockAccordionItem.id}`,
    );

    expect(content).toHaveAttribute('data-state', 'closed');

    fireEvent.click(trigger);
    expect(content).toHaveAttribute('data-state', 'open');
    expect(content).toHaveTextContent(mockAccordionItem.content);

    fireEvent.click(trigger);
    expect(content).toHaveAttribute('data-state', 'closed');
  });
});
