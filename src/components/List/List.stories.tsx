import { Meta, StoryObj } from '@storybook/nextjs';

import { listItemsRich, listItemsSimple } from '@/data/mock/listItems';

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
    listItems: listItemsSimple,
    className: '',
  },
};

export const CircleBullet: StoryObj = {
  args: {
    bulletType: 'circle',
    listItems: listItemsSimple,
    className: '',
  },
};

export const GreenStarBullet: StoryObj = {
  args: {
    bulletType: 'star',
    listItems: listItemsSimple,
    className: '',
  },
};

export const GreenStarBulletWithColoredText: StoryObj = {
  args: {
    bulletType: 'star',
    listItems: listItemsRich,
    className: '',
  },
};
