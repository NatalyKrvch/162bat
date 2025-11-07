import type { FormattedTextItem } from '@components/Cards/GuaranteeCard/types';
import { render, within } from '@testing-library/react';

import { LIST_TEST_ID, STAR_ICON_TEST_ID } from '@/lib/testIds';

import List from '../List';

const mockListItems = [
  {
    id: 'simple-1',
    children:
      'Виконує бойові завдання у складі підрозділу, веде вогонь по противнику',
  },
  {
    id: 'simple-2',
    children: 'Забезпечує прикриття товаришів під час бою',
  },
  {
    id: 'simple-3',
    children: 'Контролює безпеку визначеної території',
  },
];

const mockListItemsFormatted: FormattedTextItem[] = [
  {
    id: 'formatted-content-1',
    children: [
      {
        id: 'fc1-1',
        text: 'Щомісячне грошове забезпечення',
        color: 'white',
        fontWeight: 'bold',
      },
      { id: 'fc1-2', text: ' — від ', color: 'white', fontWeight: 'normal' },
      {
        id: 'fc1-3',
        text: '20 000 ',
        color: 'green',
        fontWeight: 'bold',
        variant: 'number',
      },
    ],
  },
];

describe('List', () => {
  it('should render correctly with default props', () => {
    const { container, getByTestId } = render(
      <List listItems={mockListItems} />,
    );

    const list = getByTestId(LIST_TEST_ID);
    expect(list).toBeInTheDocument();

    mockListItems.forEach(item => {
      expect(list).toHaveTextContent(item.children);
    });

    expect(list).toHaveClass('list-disc');
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with circle bullet', () => {
    const { container, getByTestId } = render(
      <List listItems={mockListItems} bulletType="circle" />,
    );

    const list = getByTestId(LIST_TEST_ID);
    expect(list).toBeInTheDocument();

    mockListItems.forEach(item => {
      expect(list).toHaveTextContent(item.children);
    });

    expect(list).toHaveClass('list-disc');
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with star bullet', () => {
    const { container, getByTestId } = render(
      <List listItems={mockListItems} bulletType="star" />,
    );

    const list = getByTestId(LIST_TEST_ID);
    expect(list).toBeInTheDocument();

    mockListItems.forEach(item => {
      expect(list).toHaveTextContent(item.children);
    });

    expect(list).not.toHaveClass('list-disc');

    const listItemsElements = list.querySelectorAll('li');
    listItemsElements.forEach(item => {
      expect(item).toHaveClass('flex items-center gap-4');
      expect(within(item).getByTestId(STAR_ICON_TEST_ID)).toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });

  it('should render correctly with star bullet and formattedText', () => {
    const { container, getByTestId } = render(
      <List listItems={mockListItemsFormatted} bulletType="star" />,
    );

    const list = getByTestId(LIST_TEST_ID);
    expect(list).toBeInTheDocument();

    const listItemElements = within(list).getAllByRole('listitem');

    mockListItemsFormatted.forEach((item, index) => {
      const listItem = listItemElements[index];

      if (typeof item.children !== 'string') {
        item.children.forEach(child => {
          expect(listItem.textContent).toContain(child.text);
        });
      }

      expect(
        within(listItem).getByTestId(STAR_ICON_TEST_ID),
      ).toBeInTheDocument();

      expect(listItem).toHaveClass('flex items-center gap-4');
    });

    expect(list).not.toHaveClass('list-disc');
    expect(container).toMatchSnapshot();
  });

  it('should apply custom className', () => {
    const customClass = 'custom-class';
    const { container, getByTestId } = render(
      <List listItems={mockListItems} className={customClass} />,
    );

    const list = getByTestId(LIST_TEST_ID);
    expect(list).toHaveClass(customClass);
    expect(container).toMatchSnapshot();
  });

  it('should not render ul if listItems is empty', () => {
    const { container, queryByTestId } = render(<List listItems={[]} />);

    const list = queryByTestId(LIST_TEST_ID);
    expect(list).toBeNull();
    expect(container).toHaveTextContent('');
    expect(container).toBeEmptyDOMElement();
  });
});
