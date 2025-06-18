import { render, within } from '@testing-library/react';

import { listItems, listItemsFormatted } from '@/data/mock/listItems';
import { LIST_TEST_ID } from '@/lib/testIds';

import List from '../List';

describe('List', () => {
  it('should render correctly with default props', () => {
    const { container, getByTestId } = render(<List listItems={listItems} />);

    const list = getByTestId(LIST_TEST_ID);
    expect(list).toBeInTheDocument();

    listItems.forEach(item => {
      expect(list).toHaveTextContent(item.children);
    });

    expect(list).toHaveClass('list-disc');
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with circle bullet', () => {
    const { container, getByTestId } = render(
      <List listItems={listItems} bulletType="circle" />,
    );

    const list = getByTestId(LIST_TEST_ID);
    expect(list).toBeInTheDocument();

    listItems.forEach(item => {
      expect(list).toHaveTextContent(item.children);
    });

    expect(list).toHaveClass('list-disc');
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with star bullet', () => {
    const { container, getByTestId } = render(
      <List listItems={listItems} bulletType="star" />,
    );

    const list = getByTestId(LIST_TEST_ID);
    expect(list).toBeInTheDocument();

    listItems.forEach(item => {
      expect(list).toHaveTextContent(item.children);
    });

    expect(list).not.toHaveClass('list-disc');

    const listItemsElements = list.querySelectorAll('li');
    listItemsElements.forEach(item => {
      expect(item).toHaveClass('flex items-center gap-4');
      expect(within(item).getByTestId('star-icon')).toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });

  it('should render correctly with star bullet and richText', () => {
    const { container, getByTestId } = render(
      <List listItems={listItemsFormatted} bulletType="star" />,
    );

    const list = getByTestId(LIST_TEST_ID);
    expect(list).toBeInTheDocument();

    listItemsFormatted.forEach(item => {
      if (typeof item.children !== 'string') {
        item.children.forEach(child => {
          expect(list).toHaveTextContent(child.text);
        });
      }
    });

    expect(list).not.toHaveClass('list-disc');

    const listItemsElements = list.querySelectorAll('li');
    listItemsElements.forEach(item => {
      expect(item).toHaveClass('flex items-center gap-4');
      expect(within(item).getByTestId('star-icon')).toBeInTheDocument();
    });
    expect(container).toMatchSnapshot();
  });

  it('should apply custom className', () => {
    const customClass = 'custom-class';
    const { container, getByTestId } = render(
      <List listItems={listItems} className={customClass} />,
    );

    const list = getByTestId(LIST_TEST_ID);
    expect(list).toHaveClass(customClass);
    expect(container).toMatchSnapshot();
  });

  it('should not render  ul if listItems is empty', () => {
    const { container, queryByTestId } = render(<List listItems={[]} />);

    const list = queryByTestId(LIST_TEST_ID);
    expect(list).toBeNull();
    expect(container).toHaveTextContent('');
    expect(container).toBeEmptyDOMElement();
  });
});
