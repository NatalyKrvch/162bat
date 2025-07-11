import { Meta, StoryObj } from '@storybook/nextjs';

import QRcard from './QRcard';

const qrCode =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/500px-QR_code_for_mobile_English_Wikipedia.svg.png';

export default {
  component: QRcard,
  title: 'QRcard',
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = {
  args: {
    imageUrl: qrCode,
    buttonText: 'Scan QR Code',
    link: 'https://www.google.com',
  },
};
