import { Meta, StoryObj } from '@storybook/nextjs';

import Navigation from './Navigation';

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
      options: ['header', 'footer'],
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    children: list,
  },
};
