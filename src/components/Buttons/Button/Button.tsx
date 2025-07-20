import { type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { BUTTON_TEST_ID } from '@/lib/testIds';

import useButtonClasses from './hooks/useButtonClasses';
import type { ButtonProps } from './types';

const Button = ({
  disabled,
  onClick,
  children,
  variant = 'primary',
  className = '',
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  const getVariantClasses = useButtonClasses();

  return (
    <button
      data-testid={BUTTON_TEST_ID}
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        'rounded-default w-full cursor-pointer text-lg leading-none transition-colors lg:text-xl',
        getVariantClasses(variant),
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
