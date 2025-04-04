import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import InternalLink from './InternalLink';

export default {
  component: InternalLink,
  title: 'Internal Link',
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
    title: 'Головна',
    href: '/home',
    className:
      'hover:text-btn-text-hover-secondary active:text-btn-text-click-secondary text-base/4 sm:text-xl/5',
    children: 'Головна',
  },
};

export const Underlined: StoryObj = {
  args: {
    title: 'Читати повністю',
    href: '/history_of_the_batalion',
    className:
      'underline hover:text-btn-text-hover-secondary active:text-btn-text-click-secondary text-base/4 sm:text-xl/5',
    children: 'Читати повністю',
  },
};
