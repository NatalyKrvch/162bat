import { twMerge } from 'tailwind-merge';

import { CHEVRON_TEST_ID } from '@/lib/testIds';

import type { ChevronProps } from './types';

const Chevron = ({ className }: ChevronProps) => {
  return (
    <svg
      className={twMerge('h-6 w-6 stroke-white sm:h-8 sm:w-8', className)}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={CHEVRON_TEST_ID}
    >
      <path
        d="M8 12L16 20L24 12"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Chevron;
