import { type Meta, type StoryObj } from '@storybook/nextjs';

import Navigation from './Navigation';
import { NavigationVariant } from './Navigation.variants';

const list = [
  <li key="1">Item 1</li>,
  <li key="2">Item 2</li>,
  <li key="3">Item 3</li>,
];

export default {
  component: Navigation,
  title: 'Navigation',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.values(NavigationVariant),
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    children: list,
  },
};
