import { type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { BUTTON_TEST_ID } from '@/lib/testIds';

import { getButtonVariantClasses } from './helpers/getButtonVariantClasses';
import type { ButtonProps } from './types';

const Button = ({
  type = "button",
  disabled,
  onClick,
  children,
  variant = 'primary',
  className = '',
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      data-testid={BUTTON_TEST_ID}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={twMerge(
        'rounded-default w-full cursor-pointer text-lg leading-none transition-colors disabled:cursor-default lg:text-xl',
        getButtonVariantClasses(variant),
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
