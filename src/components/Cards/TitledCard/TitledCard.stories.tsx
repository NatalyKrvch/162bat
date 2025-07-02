import { Meta, StoryObj } from '@storybook/nextjs';

import { titledCardText } from '@/data/mock/titledCardText';

import TitledCard from './TitledCard';

export default {
  component: TitledCard,
  title: 'TitledCard',
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = {
  args: {
    title: 'Titled Card',
    description: 'This is a titled card component.',
  },
};

export const TitledCardWithGreenTitle: StoryObj = {
  args: {
    title: 'Titled Card',
    className: 'gap-3 sm:text-lg',
    titleColor: 'green',
    description: 'This is a titled card component.',
  },
};

export const TitledCardWithManyParagraph: StoryObj = {
  args: {
    title: 'Titled Card',
    className: 'gap-3 sm:text-lg',
    titleColor: 'green',
    description: titledCardText,
  },
};
