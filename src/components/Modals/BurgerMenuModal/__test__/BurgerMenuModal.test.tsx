import { fireEvent, render, screen } from '@testing-library/react';

import MenuItems from '../BurgerMenuModal';

const mockMenu = [
  { title: 'Головна', href: '/' },
  { title: 'Про нас', href: '/about' },
];

const mockContacts = {
  phoneNumbers: ['+380123456789'],
  messengers: {
    viber: {
      icon: '/viber.svg',
      link: 'viber://chat?number=+380123456789',
    },
  },
};

describe('Menu', () => {
  it('should trigger button with provided text', () => {
    const { container } = render(
      <MenuItems buttonText="Menu" menu={mockMenu} contacts={mockContacts} />,
    );

    expect(screen.getByRole('button', { name: 'Menu' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('renders all menu items and contacts from props', () => {
    render(
      <MenuItems buttonText="Menu" menu={mockMenu} contacts={mockContacts} />,
    );

    const button = screen.getByRole('button', { name: 'Menu' });
    fireEvent.click(button);

    mockMenu.forEach(item => {
      expect(screen.getByRole('link', { name: item.title })).toHaveAttribute(
        'href',
        item.href,
      );
    });

    expect(
      screen.getByRole('link', { name: mockContacts.phoneNumbers[0] }),
    ).toHaveAttribute('href', `tel:${mockContacts.phoneNumbers[0]}`);
  });
});
