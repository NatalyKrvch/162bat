import { Meta, StoryObj } from '@storybook/nextjs';

import Chevron from './Chevron';

export default {
  component: Chevron,
  title: 'Chevron',
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = {
  render: () => <Chevron />,
};

export const ChevronDownGreen: StoryObj = {
  render: () => <Chevron className="stroke-main rotate-180" />,
};
