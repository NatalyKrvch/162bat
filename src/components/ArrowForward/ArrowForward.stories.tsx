import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import ArrowForward from './ArrowForward';

export default {
  component: ArrowForward,
  title: 'Arrow Forward',
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = {};

export const WithButtonContainer: StoryObj = {
  render: () => (
    <Button variant="icon" onClick={() => console.log('ArrowForward clicked')}>
      <ArrowForward />
    </Button>
  ),
};
