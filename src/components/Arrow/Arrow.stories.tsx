import { Meta, StoryObj } from '@storybook/nextjs';

import Arrow from './Arrow';

export default {
  component: Arrow,
  title: 'Arrow',
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
  },
} as Meta;

export const LeftArrow: StoryObj = {
  render: () => <Arrow direction="left" />,
};

export const RightArrow: StoryObj = {
  render: () => <Arrow direction="right" />,
};
