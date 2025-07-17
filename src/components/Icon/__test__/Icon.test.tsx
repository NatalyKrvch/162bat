import { fireEvent, render } from '@testing-library/react';

import { ICON_TEST_ID } from '@/lib/testIds';

import Icon from '../Icon';

const DummyIcon = <svg data-testid="dummy-icon" />;

describe('Icon', () => {
  it('should render component correctly', () => {
    const { container, getByTestId } = render(<Icon icon={DummyIcon} />);

    const iconElement = getByTestId(ICON_TEST_ID);
    expect(iconElement).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render with custom className', () => {
    const { getByTestId } = render(
      <Icon icon={DummyIcon} className="custom-class" />,
    );

    const iconElement = getByTestId(ICON_TEST_ID);
    expect(iconElement).toHaveClass('custom-class');
  });

  it('should render as a button when "as" prop is set to "button"', () => {
    const { getByTestId } = render(<Icon icon={DummyIcon} as="button" />);

    const iconElement = getByTestId(ICON_TEST_ID);
    expect(iconElement.tagName).toBe('BUTTON');
  });

  it('should call onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Icon icon={DummyIcon} onClick={handleClick} />,
    );

    const iconElement = getByTestId(ICON_TEST_ID);
    fireEvent.click(iconElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
