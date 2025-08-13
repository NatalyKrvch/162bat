import * as Dialog from '@radix-ui/react-dialog';
import { Meta, StoryObj } from '@storybook/nextjs';

import { Button } from '../Buttons/Button';
import ModalWrapper from './ModalWrapper';

const children = (
  <div className="flex h-full flex-col items-center justify-between bg-green-300/50 p-10">
    <Dialog.Title />
    <Dialog.Description />
    <Dialog.Close asChild>
      <Button className="w-30">Close modal</Button>
    </Dialog.Close>
    <div className="flex h-full flex-col justify-center">Modal window</div>
  </div>
);

export default {
  component: ModalWrapper,
  title: 'ModalWrapper',
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = {
  args: {
    children: children,
    trigger: (
      <Button variant="secondary" className="w-30">
        Open modal
      </Button>
    ),
    className: 'w-screen lg:w-[660px] h-screen flex flex-col',
  },
};
