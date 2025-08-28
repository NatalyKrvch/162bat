import { Meta, StoryObj } from '@storybook/nextjs';

import MenuItemLink from './MenuItemLink';
import { MenuItemVariant } from './MenuItemLink.variants';

export default {
  component: MenuItemLink,
  title: 'MenuItemLink',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.values(MenuItemVariant),
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    children: 'Default Menu Item',
    text: 'Default',
    href: 'test',
  },
};

export const HeaderMenuItemLink: StoryObj = {
  args: {
    children: 'Header Menu Item',
    variant: MenuItemVariant.HeaderItem,
    text: 'Header Item',
    href: 'test',
  },
};

export const FooterMenuItemLink: StoryObj = {
  args: {
    children: 'Footer Menu Item Button',
    variant: MenuItemVariant.FooterItem,
    text: 'Footer Item',
    href: 'test',
  },
};
