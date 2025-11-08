'use client';
'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { type PropsWithChildren, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { MODAL_TRIGGER_TEST_ID } from '@/lib/testIds';

import type { ModalWrapperProps } from './types';
import { usePathname } from 'next/navigation';
import { usePathname } from 'next/navigation';

const ModalWrapper = ({
  children,
  trigger,
  animationStyle,
  className = '',
}: PropsWithChildren<ModalWrapperProps>) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger data-testid={MODAL_TRIGGER_TEST_ID} asChild>
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
