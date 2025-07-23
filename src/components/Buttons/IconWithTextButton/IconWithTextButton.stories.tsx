import { Meta, StoryObj } from '@storybook/nextjs';
import { RiMenu3Fill } from 'react-icons/ri';

import IconWithTextButton from './IconWithTextButton';

export default {
  component: IconWithTextButton,
  title: 'IconWithTextButton',
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = {
  render: () => (
    <IconWithTextButton
      icon={<RiMenu3Fill className="h-9 w-9" />}
      text="Меню"
    />
  ),
};
