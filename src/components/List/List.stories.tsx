import type { Meta, StoryObj } from '@storybook/react';

import List from './List';

const mockListItems = [
  {
    id: 'simple-1',
    children:
      'Виконує бойові завдання у складі підрозділу, веде вогонь по противнику',
  },
  {
    id: 'simple-2',
    children: 'Забезпечує прикриття товаришів під час бою',
  },
  {
    id: 'simple-3',
    children: 'Контролює безпеку визначеної території',
  },
];

const mockListItemsFormatted = [
  {
    id: 'formatted-content-1',
    children: [
      {
        id: 'fc1-1',
        text: 'Щомісячне грошове забезпечення',
        color: 'white',
        fontWeight: 'bold',
      },
      {
        id: 'fc1-2',
        text: ' — від ',
        color: 'white',
        fontWeight: 'normal',
      },
      {
        id: 'fc1-3',
        text: '20 000 ',
        color: 'green',
        fontWeight: 'bold',
        variant: 'number',
      },
    ],
  },
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
    listItems: mockListItems,
  },
};

export const CircleBullet: StoryObj = {
  args: {
    bulletType: 'circle',
    listItems: mockListItems,
    className: 'sm:text-xl',
  },
};

export const GreenStarBullet: StoryObj = {
  args: {
    bulletType: 'star',
    listItems: mockListItems,
    className: 'sm:text-2xl',
  },
};

export const GreenStarBulletWithColoredText: StoryObj = {
  args: {
    bulletType: 'star',
    listItems: mockListItemsFormatted,
    className: 'sm:text-2xl',
  },
};
