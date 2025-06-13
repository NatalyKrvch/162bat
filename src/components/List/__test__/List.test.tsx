import { render, within } from '@testing-library/react';

import { listItemsRich, listItemsSimple } from '@/data/mock/listItems';
import { LIST_TEST_ID } from '@/lib/testIds';

import List from '../List';

describe('List', () => {
  it('should render correctly with default props', () => {
    const { container, getByTestId } = render(
      <List listItems={listItemsSimple} />,
    );

    const list = getByTestId(LIST_TEST_ID);
    expect(list).toBeInTheDocument();

    listItemsSimple.forEach(item => {
      expect(list).toHaveTextContent(item);
    });

    expect(list).toHaveClass('list-disc');
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with circle bullet', () => {
    const { container, getByTestId } = render(
      <List listItems={listItemsSimple} bulletType="circle" />,
    );

    const list = getByTestId(LIST_TEST_ID);
    expect(list).toBeInTheDocument();

    listItemsSimple.forEach(item => {
      expect(list).toHaveTextContent(item);
    });

    expect(list).toHaveClass('list-disc');
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with star bullet', () => {
    const { container, getByTestId } = render(
      <List listItems={listItemsSimple} bulletType="star" />,
    );

    const list = getByTestId(LIST_TEST_ID);
    expect(list).toBeInTheDocument();

    listItemsSimple.forEach(item => {
      expect(list).toHaveTextContent(item);
    });

    expect(list).not.toHaveClass('list-disc');

    const listItems = list.querySelectorAll('li');
    listItems.forEach(item => {
      expect(item).toHaveClass('flex items-center gap-4');
      expect(within(item).getByTestId('star-icon')).toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });

  it('should render correctly with star bullet and richText', () => {
    const { container, getByTestId } = render(
      <List listItems={listItemsRich} bulletType="star" />,
    );

    const plaintTexsts = listItemsRich.map(item =>
      item.map(i => i.text).join(''),
    );

    const list = getByTestId(LIST_TEST_ID);
    expect(list).toBeInTheDocument();

    plaintTexsts.forEach(item => {
      expect(list).toHaveTextContent(item);
    });

    expect(list).not.toHaveClass('list-disc');

    const listItems = list.querySelectorAll('li');
    listItems.forEach(item => {
      expect(item).toHaveClass('flex items-center gap-4');
      expect(within(item).getByTestId('star-icon')).toBeInTheDocument();
    });
    expect(container).toMatchSnapshot();
  });

  it('should apply custom className', () => {
    const customClass = 'custom-class';
    const { container, getByTestId } = render(
      <List listItems={listItemsSimple} className={customClass} />,
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
