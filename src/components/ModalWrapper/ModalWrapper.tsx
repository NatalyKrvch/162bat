import * as Dialog from '@radix-ui/react-dialog';
import { type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { MODAL_TRIGGER } from '@/lib/testIds';

import type { ModalWrapperProps } from './types';

const ModalWrapper = ({
  children,
  trigger,
  className = '',
}: PropsWithChildren<ModalWrapperProps>) => {
  const animationStyle =
    'fixed data-[state=open]:animate-header-menu-in data-[state=closed]:animate-header-menu-out';

  return (
    <Dialog.Root>
      <Dialog.Trigger data-testid={MODAL_TRIGGER} asChild>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={twMerge('fixed inset-0', animationStyle)} />
        <Dialog.Content
          className={twMerge(
            'fixed top-0 left-0 z-50 bg-(--color-bg-primary) outline-none',
            animationStyle,
            className,
          )}
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalWrapper;
