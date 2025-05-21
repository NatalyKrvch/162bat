import { Meta, StoryObj } from '@storybook/react';

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
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    children: 'Історія Батальйону',
  },
};
