import { Meta, StoryObj } from '@storybook/nextjs';

import { accordionItems } from '@/data/mock/accordionItems';

import AccordionComponent from './Accordion';

export default {
  component: AccordionComponent,
  title: 'Accordion',
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = {
  args: {
    accordionItems: accordionItems,
  },
};
