import type { Meta, StoryObj } from '@storybook/nextjs';

import SectionTitle from './SectionTitle';

export default {
  component: SectionTitle,
  title: 'Section Title',
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    children: 'Історія Батальйону',
  },
};
