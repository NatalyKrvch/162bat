import { render } from '@testing-library/react';

import { QR_CARD_TEST_ID } from '@/lib/testIds';

import QRcard from '../QRCodeCard';

const mockData = {
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/500px-QR_code_for_mobile_English_Wikipedia.svg.png',
  buttonText: 'Button Text',
  link: 'https://www.google.com',
};

describe('QRcard', () => {
  it('should render QRcomponent correctly', () => {
    const { container, getByTestId, getByAltText, getByRole } = render(
      <QRcard {...mockData} />,
    );

    const qrCard = getByTestId(QR_CARD_TEST_ID);
    expect(qrCard).toBeInTheDocument();
    expect(qrCard).toHaveClass('max-w-[628px] max-h-[560px] mx-auto');

    const expectedAltText = `QR-код для пожертви на підтримку батальйону через ${mockData.buttonText}`;
    const image = getByAltText(expectedAltText);
    expect(image?.getAttribute('src')).toContain(
      encodeURIComponent(mockData.imageUrl),
    );

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(mockData.buttonText);
    expect(container).toMatchSnapshot();
  });

  it('should apply custom className', () => {
    const customClass = 'custom-class';
    const { getByTestId } = render(
      <QRcard {...mockData} className={customClass} />,
    );

    const qrCard = getByTestId(QR_CARD_TEST_ID);
    expect(qrCard).toHaveClass(customClass);
  });
});
