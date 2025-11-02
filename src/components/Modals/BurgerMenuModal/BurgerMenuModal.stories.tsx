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
  number: '+38093 000 00 00',
  email: 'infomail@gmail.com',
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
