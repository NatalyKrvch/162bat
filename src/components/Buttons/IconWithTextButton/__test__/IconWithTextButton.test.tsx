import { fireEvent, render } from '@testing-library/react';

import { ICON_WITH_TEXT_TEST_ID } from '@/lib/testIds';

import IconWithTextButton from '../IconWithTextButton';

const DummyIcon = <svg data-testid="dummy-icon" />;

describe('IconWithTextButton', () => {
  it('should render component correctly', () => {
    const { container, getByTestId } = render(
      <IconWithTextButton icon={DummyIcon} text="test" />,
    );

    const iconWithTextElement = getByTestId(ICON_WITH_TEXT_TEST_ID);
    expect(iconWithTextElement).toBeInTheDocument();
    expect(iconWithTextElement).toHaveTextContent('test');
    expect(container).toMatchSnapshot();
  });

  it('should render with custom className', () => {
    const { getByTestId } = render(
      <IconWithTextButton
        icon={DummyIcon}
        text="test"
        buttonClassName="custom-class"
      />,
    );

    const iconElement = getByTestId(ICON_WITH_TEXT_TEST_ID);
    expect(iconElement).toHaveClass('custom-class');
  });

  it('should call onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <IconWithTextButton icon={DummyIcon} text="test" onClick={handleClick} />,
    );

    const iconElement = getByTestId(ICON_WITH_TEXT_TEST_ID);
    fireEvent.click(iconElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
