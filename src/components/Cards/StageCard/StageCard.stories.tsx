import type { Meta, StoryObj } from '@storybook/nextjs';

import StageCard from './StageCard';

export default {
  component: StageCard,
  title: 'Stage Card',
  tags: ['autodocs'],
  args: {
    step: 'КРОК 1',
    title: 'Залишаєте заявку',
    description:
      "Просто заповніть форму, і ми з вами зв'яжемося найближчим часом.",
  },
} as Meta;

export const Default: StoryObj = {
  args: {},
};
