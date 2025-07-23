import { Meta, StoryObj } from '@storybook/nextjs';
import { IoClose } from 'react-icons/io5';

import IconButton from './IconButton';

export default {
  component: IconButton,
  title: 'IconButton',
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = {
  render: () => <IconButton icon={<IoClose className="h-9 w-9" />} />,
};
