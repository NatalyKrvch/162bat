import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import ExternalLink from './ExternalLink';

export default {
  component: ExternalLink,
  title: 'External Link',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    href: { control: 'text' },
    className: { control: 'text' },
    children: {
      control: 'text',
      table: { defaultValue: { summary: 'undefined' } },
    },
    onClick: action('clicked'),
    onMouseEnter: action('hovered'),
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    title: 'Приват банк',
    href: 'https://www.privatbank.ua/',
    className:
      'text-border-btn-bg hover:text-btn-bg-hover hover:border-btn-bg-hover active:text-btn-bg-click active:border-btn-bg-click rounded-xl border-2 px-33 py-4',
    children: 'Приват банк',
  },
};
