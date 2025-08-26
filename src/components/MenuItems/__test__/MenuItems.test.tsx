import { fireEvent, render, screen } from '@testing-library/react';

import MenuItems from '../MenuItems';

const mockMenu = [
  { title: 'Головна', href: '/' },
  { title: 'Про нас', href: '/about' },
];

const mockContacts = {
  number: '+380123456789',
  email: 'test@example.com',
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
      screen.getByRole('link', { name: mockContacts.number }),
    ).toHaveAttribute('href', `tel:${mockContacts.number}`);
    expect(
      screen.getByRole('link', { name: mockContacts.email }),
    ).toHaveAttribute('href', `mailto:${mockContacts.email}`);
  });
});
