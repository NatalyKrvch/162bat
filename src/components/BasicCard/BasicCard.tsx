import { type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { BASIC_CARD_TEST_ID } from '@/lib/testIds';

import { BasicCardProps } from './types';

const BasicCard = ({
  withBorder = true,
  gradientPosition = 'top',
  className = '',
  children,
}: PropsWithChildren<BasicCardProps>) => {
  const isTopGradient = gradientPosition === 'top';

  return (
    <article
      data-testid={BASIC_CARD_TEST_ID}
      className={twMerge(
        'rounded-default h-full w-full',
        withBorder &&
          (isTopGradient
            ? 'bg-card-gradient-top pt-px'
            : 'bg-card-gradient-left pl-px'),
      )}
    >
      <div
        className={twMerge(
          `bg-bg-secondary border-grey rounded-inner-card h-full w-full p-8`,
          withBorder &&
            `border-1 ${isTopGradient ? 'border-t-0' : 'border-l-0'}`,
          className,
        )}
      >
        {children}
      </div>
    </article>
  );
};

export default BasicCard;
