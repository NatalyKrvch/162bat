import { type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { BASIC_CARD_TEST_ID } from '@/lib/testIds';

import { BasicCardProps } from './types';

const BasicCard = ({
  gradientPosition = 'top',
  className = '',
  children,
}: PropsWithChildren<BasicCardProps>) => {
  const isTopGradient = gradientPosition === 'top';

  return (
    <article
      data-testid={BASIC_CARD_TEST_ID}
      className={`rounded-default h-full w-full ${isTopGradient ? 'bg-card-gradient-top pt-px' : 'bg-card-gradient-left pl-px'}`}
    >
      <div
        className={twMerge(
          `bg-bg-secondary border-grey rounded-inner-card h-full w-full border-1 p-8 ${isTopGradient ? 'border-t-0' : 'border-l-0'}`,
          className,
        )}
      >
        {children}
      </div>
    </article>
  );
};

export default BasicCard;
