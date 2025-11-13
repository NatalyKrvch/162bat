import { type Meta, type StoryObj } from '@storybook/nextjs';

import BurgerMenuModal from './BurgerMenuModal';

const buttonText = 'Меню';

const menu = [
  {
    title: 'Головна',
    href: '/',
  },
  {
    title: 'Історія батальйону',
    href: '/about',
  },
];

const contacts = {
  phoneNumbers: ['+38093 000 00 00'],
  messengers: {
    viber: {
      icon: '/icons/messengers/viber-logo.svg',
      link: 'viber://chat?number=+380930000000',
    },
    telegram: {
      icon: '/icons/messengers/telegram-logo.svg',
      link: 'https://t.me/+380930000000',
    },
  },
};

export default {
  component: BurgerMenuModal,
  title: 'BurgerMenuModal',
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = {
  render: () => (
    <BurgerMenuModal buttonText={buttonText} menu={menu} contacts={contacts} />
  ),
};
