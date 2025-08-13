import { Meta, StoryObj } from '@storybook/nextjs';

import Menu from './Menu';

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
  component: Menu,
  title: 'Menu',
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = {
  render: () => (
    <Menu buttonText={buttonText} menu={menu} contacts={contacts} />
  ),
};
