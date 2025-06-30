import { Meta, StoryObj } from '@storybook/nextjs';

import Chevron from './Chevron';

export default {
  component: Chevron,
  title: 'Chevron',
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['up', 'down', 'left', 'right'],
      defaultValue: 'down',
    },
    className: {
      control: 'text',
      defaultValue: 'stroke-main',
    },
  },
} as Meta;

export const Default: StoryObj = {
  render: args => <Chevron {...args} />,
  args: {
    direction: 'down',
  },
};

export const ChevronGreen: StoryObj = {
  render: args => <Chevron {...args} className="stroke-main" />,
  args: {
    direction: 'up',
  },
};
