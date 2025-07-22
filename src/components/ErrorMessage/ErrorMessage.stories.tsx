import type { Meta, StoryObj } from '@storybook/react';

import ErrorMessage from './ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  title: 'ErrorMessage',
  component: ErrorMessage,
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    message: 'Помилка заповнення поля',
  },
};

export const CustomClass: Story = {
  args: {
    message: 'Помилка з кастомним класом',
    className: 'text-red-500 font-bold',
  },
};
