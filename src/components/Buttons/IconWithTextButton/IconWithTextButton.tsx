import { twMerge } from 'tailwind-merge';

import { ICON_WITH_TEXT_TEST_ID } from '@/lib/testIds';

import type { IconWithTextButtonProps } from './types';

const IconWithTextButton = ({
  icon,
  text,
  onClick,
  className = '',
}: IconWithTextButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={twMerge(
        'flex cursor-pointer items-center text-(--color-text-white) transition-colors duration-300 hover:text-(--color-text-green) active:text-(--color-text-validation)',
        className,
      )}
      data-testid={ICON_WITH_TEXT_TEST_ID}
    >
      {icon}
      <span className="ml-1.75 hidden text-2xl leading-[120%] font-bold lg:block">
        {text}
      </span>
    </button>
  );
};

export default IconWithTextButton;
