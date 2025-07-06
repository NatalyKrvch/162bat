import type { Meta, StoryObj } from '@storybook/react';

import { listItems, listItemsFormatted } from '@/data/mock/listItems';

import List from './List';

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
    listItems: listItems,
  },
};

export const CircleBullet: StoryObj = {
  args: {
    bulletType: 'circle',
    listItems: listItems,
    className: 'sm:text-xl',
  },
};

export const GreenStarBullet: StoryObj = {
  args: {
    bulletType: 'star',
    listItems: listItems,
    className: 'sm:text-2xl',
  },
};

export const GreenStarBulletWithColoredText: StoryObj = {
  args: {
    bulletType: 'star',
    listItems: listItemsFormatted,
    className: 'sm:text-2xl',
  },
};
