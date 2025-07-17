import { twMerge } from 'tailwind-merge';

import { ICON_WITH_TEXT_TEST_ID } from '@/lib/testIds';

import Icon from '../Icon/Icon';
import type { IconWithTextProps } from './types';

const IconWithText = ({
  icon,
  text,
  onClick,
  className = '',
}: IconWithTextProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'flex cursor-pointer items-center text-(--color-text-white) transition-colors duration-200 hover:text-(--color-text-green) active:text-(--color-text-validation)',
        className,
      )}
      data-testid={ICON_WITH_TEXT_TEST_ID}
    >
      <Icon icon={icon} hoverBgColor="hover:bg-transparent" as="div" />
      <span className="ml-1.75 hidden text-2xl leading-[120%] font-bold lg:block">
        {text}
      </span>
    </button>
  );
};

export default IconWithText;
