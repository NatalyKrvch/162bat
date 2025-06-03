import { render } from '@testing-library/react';

import { BASIC_CARD_TEST_ID } from '@/lib/testIds';

import BasicCard from '../BasicCard';

describe('BasicCard', () => {
  it('should render correctly with the top gradient by default', () => {
    const { container, getByTestId } = render(
      <BasicCard>Top gradient content</BasicCard>,
    );

    const card = getByTestId(BASIC_CARD_TEST_ID);
    expect(card).toBeInTheDocument();
    expect(card).toHaveTextContent('Top gradient content');
    expect(card).toHaveClass('bg-card-gradient-top');
    expect(container).toMatchSnapshot();
  });

  it('should render with the left gradient', () => {
    const { container, getByTestId } = render(
      <BasicCard gradientVariant="left">Left gradient content</BasicCard>,
    );

    const card = getByTestId(BASIC_CARD_TEST_ID);
    expect(card).toBeInTheDocument();
    expect(card).toHaveTextContent('Left gradient content');
    expect(card).toHaveClass('bg-card-gradient-left');
    expect(container).toMatchSnapshot();
  });

  it('should render without border', () => {
    const { container, getByTestId } = render(
      <BasicCard gradientVariant="borderless">Borderless content</BasicCard>,
    );

    const card = getByTestId(BASIC_CARD_TEST_ID);
    const firstChild = card.firstChild;

    expect(card).toBeInTheDocument();
    expect(card).toHaveTextContent('Borderless content');

    expect(card).not.toHaveClass('bg-card-gradient-top');
    expect(card).not.toHaveClass('bg-card-gradient-left');
    expect(card).toHaveClass('pl-0');
    expect(firstChild).toHaveClass('border-0');
    expect(container).toMatchSnapshot();
  });

  it('should apply custom className and render custom content', () => {
    const { container, getByTestId } = render(
      <BasicCard className="text-accent font-bold">
        <div>
          <h3>Custom Title</h3>
          <p>Custom paragraph inside the card.</p>
        </div>
      </BasicCard>,
    );

    const card = getByTestId(BASIC_CARD_TEST_ID);
    expect(card.firstChild).toHaveClass('text-accent');
    expect(card.firstChild).toHaveClass('font-bold');
    expect(card).toHaveTextContent('Custom Title');
    expect(card).toHaveTextContent('Custom paragraph inside the card.');
    expect(container).toMatchSnapshot();
  });
});
