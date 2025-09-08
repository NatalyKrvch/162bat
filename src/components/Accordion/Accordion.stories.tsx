import type { Meta, StoryObj } from '@storybook/nextjs';

import AccordionComponent from './Accordion';

const mockAccordionItems = [
  {
    id: 'accordion-item-1',
    title: 'Mock Title 1',
    content: 'Mock content for item 1.',
  },
  {
    id: 'accordion-item-2',
    title: 'Mock Title 2',
    content: 'Mock content for item 2.',
  },
  {
    id: 'accordion-item-3',
    title: 'Mock Title 3',
    content: 'Mock content for item 3.',
  },
];

export default {
  component: AccordionComponent,
  title: 'Accordion',
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = {
  args: {
    items: mockAccordionItems,
  },
};
