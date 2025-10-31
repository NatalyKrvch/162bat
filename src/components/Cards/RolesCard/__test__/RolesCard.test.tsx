import { render } from '@testing-library/react';

import { FAQ_CARD_TEST_ID } from '@/lib/testIds';
import RolesCard from '../RolesCard';

 
describe('RolesCard', () => {
  it('should not be rendered if question is empty', () => {
    const { container } = render(
      <RolesCard
        question=""
        answer={{ text: 'answer', list: [], conclusion: '' }}
      />,
    );

    expect(container.firstChild).toBeNull();
  });
  it('should not be rendered if answer is empty', () => {
    const { container } = render(
      <RolesCard question="What is this FAQ about?" answer={{text:'', list:[], conclusion:''}} />,
    );

    expect(container.firstChild).toBeNull();
  });

  it('should render with question and answer text', () => {
    const { container, getByTestId } = render(
      <RolesCard
        question="What is this FAQ about?"
        answer={{ text: 'This is the answer', list: [], conclusion: '' }}
      />,
    );

    const card = getByTestId(FAQ_CARD_TEST_ID);
    expect(card).toBeInTheDocument();
    expect(card).toHaveTextContent('What is this FAQ about?');
    expect(card).toHaveTextContent('This is the answer');
    expect(container).toMatchSnapshot();
  });

  it('should render with complete answer data', () => {
    const { container, getByTestId } = render(
      <FAQCard
        question="How does it work?"
        answer={{
          text: 'Here is the explanation',
          list: ['Step 1', 'Step 2'],
          conclusion: 'That is how it works',
        }}
      />,
    );

    const card = getByTestId(FAQ_CARD_TEST_ID);
    expect(card).toBeInTheDocument();
    expect(card).toHaveTextContent('How does it work?');
    expect(card).toHaveTextContent('Here is the explanation');
    expect(container).toMatchSnapshot();
  });
});
