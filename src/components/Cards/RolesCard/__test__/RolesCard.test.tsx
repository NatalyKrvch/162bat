import { render } from '@testing-library/react';

import { ROLES_CARD_TEST_ID } from '@/lib/testIds';

import RolesCard from '../RolesCard';

describe('RolesCard', () => {
  it('should not render if list is empty', () => {
    const { container } = render(<RolesCard title="My Title" list={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('should render correctly with title and list', () => {
    const listItems = ['Item 1', 'Item 2'];
    const { getByTestId, getByText } = render(
      <RolesCard title="My Title" list={listItems} />,
    );

    const card = getByTestId(ROLES_CARD_TEST_ID);
    expect(card).toBeInTheDocument();
    expect(getByText('My Title')).toBeInTheDocument();
    listItems.forEach(item => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });
});
