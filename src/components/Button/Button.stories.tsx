import { Meta, StoryObj } from '@storybook/nextjs';

import { Arrow } from '../icons/Arrow';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'link', 'icon'],
    },
    className: {
      control: { type: 'text' },
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    children: 'Default Button',
  },
};

export const Primary: StoryObj = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const PrimaryDisabled: StoryObj = {
  args: {
    children: 'Primary Disabled',
    variant: 'primary',
    disabled: true,
  },
};

export const Secondary: StoryObj = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const SecondaryDisabled: StoryObj = {
  args: {
    children: 'Secondary Disabled',
    variant: 'secondary',
    disabled: true,
  },
};

export const Link: StoryObj = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
};

export const LinkDisabled: StoryObj = {
  args: {
    children: 'Link Disabled',
    variant: 'link',
    disabled: true,
  },
};

export const Icon: StoryObj = {
  args: {
    children: <Arrow direction="right" />,
    variant: 'icon',
  },
};

export const IconDisabled: StoryObj = {
  args: {
    children: <Arrow direction="right" />,
    variant: 'icon',
    disabled: true,
  },
};
