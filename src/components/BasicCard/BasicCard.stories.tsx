import { Meta, StoryObj } from '@storybook/nextjs';

import BasicCard from './BasicCard';

export default {
  component: BasicCard,
  title: 'Basic Card',
  tags: ['autodocs'],
  argTypes: {
    gradientPosition: {
      control: 'radio',
      options: ['top', 'left'],
    },
    className: {
      control: false,
    },
    children: {
      control: 'text',
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    children: 'This card has default gradient border.',
  },
};

export const TopGradient: StoryObj = {
  args: {
    gradientPosition: 'top',
    children: 'This card has a top gradient border.',
  },
};

export const LeftGradient: StoryObj = {
  args: {
    gradientPosition: 'left',
    children: 'This card has a left gradient border.',
  },
};
