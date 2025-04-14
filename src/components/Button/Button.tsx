import { type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { BUTTON_TEST_ID } from '@/lib/testIds';

import useButtonClasses from './hooks/useButtonClasses';
import { ButtonProps } from './types';

const Button = ({
  disabled,
  onClick,
  children,
  variant = 'primary',
  className = '',
}: PropsWithChildren<ButtonProps>) => {
  const getVariantClasses = useButtonClasses();

  return (
    <button
      data-testid={BUTTON_TEST_ID}
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        'rounded-default w-full px-6 py-4 text-xl/5 transition-colors sm:px-8 sm:py-5 sm:text-2xl/7',
        getVariantClasses(variant),
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
