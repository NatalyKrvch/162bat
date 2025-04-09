import { Meta, StoryObj } from '@storybook/react';

import Divider from './Divider';

export default {
  component: Divider,
  title: 'Divider',
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = {
  args: {},
};

export const Grey: StoryObj = {
  args: {
    variant: 'grey',
  },
};

export const Gradient: StoryObj = {
  args: {
    variant: 'gradient',
  },
};
