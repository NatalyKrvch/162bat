import { Meta, StoryObj } from '@storybook/nextjs';

import BasicCard from './BasicCard';

export default {
  component: BasicCard,
  title: 'Basic Card',
  tags: ['autodocs'],
  argTypes: {
    gradientVariant: {
      control: 'radio',
      options: ['top', 'left', 'borderless', 'default'],
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
    gradientVariant: 'top',
    children: 'This card has a top gradient border.',
  },
};

export const LeftGradient: StoryObj = {
  args: {
    gradientVariant: 'left',
    children: 'This card has a left gradient border.',
  },
};

export const BorderLessCard: StoryObj = {
  args: {
    gradientVariant: 'borderless',
    children: 'This card has no borders.',
  },
};

export const BorderLessCardWithPic: StoryObj = {
  args: {
    gradientVariant: 'borderless',
    children: 'This card has a background image and no border.',
    className:
      'bg-[url("/images/e9a0cd65a811448b5a17ee070b62b073b4ed79b7.jpg")] bg-cover bg-center bg-black/55 bg-blend-overlay',
  },
};
