import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import ArrowBack from './ArrowBack';

export default {
  component: ArrowBack,
  title: 'Arrow Back',
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = {};

export const WithButtonContainer: StoryObj = {
  render: () => (
    <Button variant="icon" onClick={() => console.log('ArrowBack clicked')}>
      <ArrowBack />
    </Button>
  ),
};
