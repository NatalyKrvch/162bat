import { Meta, StoryObj } from '@storybook/nextjs';

import { Button } from '../Button';
import Arrow from './Arrow';

export default {
  component: Arrow,
  title: 'Arrow',
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
  },
} as Meta;

export const LeftArrow: StoryObj = {
  render: () => (
    <Button variant="icon" onClick={() => console.log('Arrow left clicked')}>
      <Arrow direction="left" />
    </Button>
  ),
};

export const RightArrow: StoryObj = {
  render: () => (
    <Button variant="icon" onClick={() => console.log('Arrow right clicked')}>
      <Arrow direction="right" />
    </Button>
  ),
};
