import { Meta, StoryObj } from '@storybook/nextjs';

import IconWithTextButton from './IconWithTextButton';

const menuIcon = (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27 15H9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M31.5 9H4.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M31.5 21H4.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27 27H9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default {
  component: IconWithTextButton,
  title: 'IconWithText',
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = {
  render: () => <IconWithTextButton icon={menuIcon} text="Меню" />,
};
