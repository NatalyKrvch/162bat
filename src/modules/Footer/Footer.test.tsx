import { render, screen } from '@testing-library/react';

import { FOOTER_TEST_ID } from '@/lib/testIds';

import Footer from './Footer';
import type { FooterProps } from './types';

const mockData: FooterProps['data'] = {
  image: { src: '/logo.png', alt: 'Company logo' },
  menu: [
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ],
  button: {
    title: 'Get Started',
  },
  legal: 'Company Name',
  contacts: {
    phoneNumbers: [],
    messengers: {},
  },
};

describe('Footer component', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = render(
      <Footer data={mockData} onClick={jest.fn()} />,
    );

    const footer = screen.getByTestId(FOOTER_TEST_ID);
    expect(footer).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
