import { type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { CONTAINER_TEST_ID } from '@/lib/testIds';

import type { ContainerProps } from './types';

const Container = ({
  fullWidth = false,
  className = '',
  children,
}: PropsWithChildren<ContainerProps>) => {
  return (
    <div
      data-testid={CONTAINER_TEST_ID}
      className={twMerge(
        fullWidth ? 'w-screen' : 'container-width',
        'px-4 md:px-8 xl:px-20',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
