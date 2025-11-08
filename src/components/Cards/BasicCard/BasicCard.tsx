import { type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { BASIC_CARD_TEST_ID } from '@/lib/testIds';

import type { BasicCardProps } from './types';

const BasicCard = ({
  hasBorder = true,
  children,
  className = '',
  borderClassName = '',
  gradientPosition = 'top',
}: PropsWithChildren<BasicCardProps>) => {
  const isTopGradient = gradientPosition === 'top';

  return (
    <div
      data-testid={BASIC_CARD_TEST_ID}
      className={twMerge(
        'rounded-default h-full w-full [transform:translateZ(0)]',
        hasBorder &&
          (isTopGradient
            ? 'bg-card-gradient-top pt-[0.5px]'
            : 'bg-card-gradient-left pl-[0.5px]'),
        borderClassName,
      )}
    >
      <div
        className={twMerge(
          'bg-bg-secondary border-grey rounded-inner-card h-full w-full',
          hasBorder &&
            `border-1 ${isTopGradient ? 'border-t-0' : 'border-l-0'}`,
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default BasicCard;
