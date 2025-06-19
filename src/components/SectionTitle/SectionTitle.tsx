import { type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { SECTION_TITLE_TEST_ID } from '@/lib/testIds';

import { SectionTitleProps } from './types';

const SectionTitle = ({
  className = '',
  children,
}: PropsWithChildren<SectionTitleProps>) => {
  return (
    <h2
      data-testid={SECTION_TITLE_TEST_ID}
      className={twMerge(
        'w-full text-center text-2xl/7 font-bold uppercase sm:text-5xl/13 md:text-6xl/16',
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
