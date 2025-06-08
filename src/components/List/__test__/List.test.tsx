import { render } from '@testing-library/react';

import { LIST_TEST_ID } from '@/lib/testIds';

import List from '../List';

describe('List', () => {
  const items = ['item1', 'item2', 'item3'];

  it('should render correctly with default props', () => {
    const { container, getByTestId } = render(<List items={items} />);

    const list = getByTestId(LIST_TEST_ID);
    expect(list).toBeInTheDocument();

    expect(list).toHaveTextContent('item1');

    expect(list).toHaveClass('list-disc');
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with circle bullet', () => {
    const { container, getByTestId } = render(
      <List items={items} bulletType="circle" />,
    );

    const list = getByTestId(LIST_TEST_ID);
    expect(list).toBeInTheDocument();

    expect(list).toHaveTextContent('item1');

    expect(list).toHaveClass('list-disc');
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with star bullet', () => {
    const { container, getByTestId } = render(
      <List items={items} bulletType="star" />,
    );

    const list = getByTestId(LIST_TEST_ID);
    expect(list).toBeInTheDocument();

    expect(list).toHaveTextContent('item1');

    expect(list).not.toHaveClass('list-disc');

    const listItems = list.querySelectorAll('li');
    expect(listItems[0]).toHaveClass('flex items-center gap-2');
    expect(listItems[0].querySelector('svg')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should apply custom className', () => {
    const customClass = 'custom-class';
    const { container, getByTestId } = render(
      <List items={items} className={customClass} />,
    );

    const list = getByTestId(LIST_TEST_ID);
    expect(list).toHaveClass(customClass);
    expect(container).toMatchSnapshot();
  });

  it('should render empty list without crashing', () => {
    const { container, getByTestId } = render(<List items={[]} />);

    const list = getByTestId(LIST_TEST_ID);
    expect(list).toBeInTheDocument();
    expect(list).toHaveTextContent('');
    expect(container).toMatchSnapshot();
  });
});
