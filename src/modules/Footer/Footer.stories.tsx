import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { mockFooterData } from './constants/mockFooterData';
import Footer from './Footer';

export default {
  component: Footer,
  title: 'Footer',
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      defaultValue: mockFooterData,
    },
    onClick: {
      defaultValue: action('clicked'),
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    data: mockFooterData,
    onClick: action('clicked'),
  },
};
