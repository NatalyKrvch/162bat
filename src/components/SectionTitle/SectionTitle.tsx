import { type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { SECTION_TITLE_TEST_ID } from '@/lib/testIds';

import type { SectionTitleProps } from './types';

const SectionTitle = ({
  children,
  className = '',
}: PropsWithChildren<SectionTitleProps>) => {
  return (
    <h2
      data-testid={SECTION_TITLE_TEST_ID}
      className={twMerge('w-full font-bold uppercase', className)}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
