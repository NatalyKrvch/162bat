import { render } from '@testing-library/react';

import { STAGE_CARD_TEST_ID } from '@/lib/testIds';

import StageCard from '../StageCard';
import { StageCardProps } from '../types';

const mockData: StageCardProps = {
  step: 'КРОК 1',
  title: 'Залишаєте заявку',
  description:
    "Просто заповніть форму, і ми з вами зв'яжемося найближчим часом.",
};

describe('StageCard', () => {
  it('renders correctly with valid data', () => {
    const { container, getByText, getByTestId } = render(
      <StageCard {...mockData} />,
    );

    const stageCard = getByTestId(STAGE_CARD_TEST_ID);
    expect(stageCard).toBeInTheDocument();
    expect(getByText('КРОК 1')).toBeInTheDocument();
    expect(getByText('Залишаєте заявку')).toBeInTheDocument();
    expect(
      getByText(
        "Просто заповніть форму, і ми з вами зв'яжемося найближчим часом.",
      ),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
