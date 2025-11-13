import { render, screen } from '@testing-library/react';

import { HEADER_TEST_ID } from '@/lib/testIds';

import Header from '../Header';
import type { HeaderProps } from '../types';

const mockData: HeaderProps['data'] = {
  image: { src: '/logo.png', alt: 'Company logo' },
  iconButton: {
    title: 'Call us:',
  },
  button: {
    title: 'Get Started',
  },
  menu: [
    {
      title: 'Головна',
      href: '/',
    },
    {
      title: 'Історія батальйону',
      href: '/about',
    },
  ],
  contacts: {
    phoneNumbers: [],
    messengers: {},
  },
};

describe('Header component', () => {
  it('should renders correctly and matches snapshot', () => {
    const { container } = render(
      <Header data={mockData} onClick={jest.fn()} />,
    );

    const header = screen.getByTestId(HEADER_TEST_ID);
    expect(header).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
