import { Meta, StoryObj } from '@storybook/nextjs';

import List from './List';

const items = [
  'Виконує бойові завдання у складі підрозділу, веде вогонь по противнику',
  'Забезпечує прикриття товаришів під час бою',
  'Контролює безпеку визначеної території',
];

export default {
  component: List,
  title: 'List',
  tags: ['autodocs'],
  argTypes: {
    bulletType: {
      control: 'radio',
      options: ['circle', 'star'],
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    items: items,
    className: '',
  },
};

export const CircleBullet: StoryObj = {
  args: {
    bulletType: 'circle',
    items: items,
    className: '',
  },
};

export const GreenStarBullet: StoryObj = {
  args: {
    bulletType: 'star',
    items: items,
    className: '',
  },
};
