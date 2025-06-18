import { Meta, StoryObj } from '@storybook/nextjs';

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
    className: '',
  },
};

export const CircleBullet: StoryObj = {
  args: {
    bulletType: 'circle',
    listItems: listItems,
    className: '',
  },
};

export const GreenStarBullet: StoryObj = {
  args: {
    bulletType: 'star',
    listItems: listItems,
    className: '',
  },
};

export const GreenStarBulletWithColoredText: StoryObj = {
  args: {
    bulletType: 'star',
    listItems: listItemsFormatted,
    className: '',
  },
};
