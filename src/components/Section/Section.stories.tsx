import type { Meta, StoryObj } from '@storybook/nextjs';

import Section from './Section';

export default {
  component: Section,
  title: 'Section',
  tags: ['autodocs'],
  argTypes: {
    fullWidth: {
      control: 'boolean',
    },
  },
} as Meta;

export const Default: StoryObj<typeof Section> = {
  args: {
    children: <p>This is the default Section content.</p>,
  },
};

export const CustomClassNames: StoryObj<typeof Section> = {
  args: {
    children: <p>Section with custom classes.</p>,
    className: 'bg-green-500 text-white py-10',
    containerClassName: 'border-2 border-red-500',
  },
};

export const FullWidthSection: StoryObj<typeof Section> = {
  args: {
    children: <p>This section stretches full width.</p>,
    fullWidth: true,
    className: 'bg-blue-500 text-white py-10',
  },
};
