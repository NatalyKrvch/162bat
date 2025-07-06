import { FOOTER_TEST_ID } from '@lib/testIds';
import { fireEvent, render } from '@testing-library/react';

import Footer from '../Footer';

const mockOnClick = jest.fn();

const footerSectionData = {
  image: {
    src: '/mock-logo.svg',
    alt: 'Mock Logo',
  },
  menu: [
    { title: 'Mock Link 1', href: '/mock-1' },
    { title: 'Mock Link 2', href: '/mock-2' },
  ],
  contactUs: {
    title: 'Call us:',
    number: '+380991234567',
  },
  button: {
    title: 'Contact Us',
  },
  legal: 'Mock Company',
};

const { image, menu, contactUs, button, legal } = footerSectionData;
const renderFooter = () =>
  render(<Footer data={footerSectionData} onClick={mockOnClick} />);

describe('Footer', () => {
  it('renders correctly and matches snapshot', () => {
    const { container, getByTestId } = renderFooter();
    expect(getByTestId(FOOTER_TEST_ID)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('renders the logo image with correct alt text', () => {
    const { getByAltText } = renderFooter();
    expect(getByAltText(image.alt)).toBeInTheDocument();
    expect(getByAltText(image.alt)).toHaveAttribute(
      'src',
      expect.stringContaining(image.src),
    );
  });

  it('renders all menu items with correct links', () => {
    const { getByText } = renderFooter();
    menu.forEach(item => {
      expect(getByText(item.title)).toBeInTheDocument();
      expect(getByText(item.title)).toHaveAttribute('href', item.href);
    });
  });

  it('renders contact information correctly', () => {
    const { getByText } = renderFooter();
    expect(getByText(contactUs.title)).toBeInTheDocument();
    expect(getByText(contactUs.number)).toBeInTheDocument();
    expect(getByText(contactUs.number)).toHaveAttribute(
      'href',
      `tel:${contactUs.number}`,
    );
  });

  it('renders the button and calls onClick when clicked', () => {
    const { getByRole } = renderFooter();
    const footerButton = getByRole('button', { name: button.title });
    expect(footerButton).toBeInTheDocument();
    fireEvent.click(footerButton);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('displays current year and legal text', () => {
    const { getByText } = renderFooter();
    const currentYear = new Date().getFullYear();
    const legalText = getByText(`${currentYear} ${legal}`);
    expect(legalText).toBeInTheDocument();
  });
});
