import { twMerge } from 'tailwind-merge';

import { ICON_TEST_ID } from '@/lib/testIds';

import type { IconProps } from './types';

const Icon = ({
  icon,
  onClick,
  className = '',
  as = 'button',
  hoverBgColor = 'hover:bg-(--color-green)',
}: IconProps) => {
  const Component = as;

  return (
    <Component
      className={twMerge(
        `flex h-11.5 w-11.5 cursor-pointer items-center justify-center rounded-[5px] bg-transparent ${hoverBgColor} transition-colors duration-200 active:bg-transparent active:text-(--color-btn-text-click-secondary)`,
        className,
      )}
      onClick={onClick}
      type={as === 'button' ? 'button' : undefined}
      data-testid={ICON_TEST_ID}
    >
      {icon}
    </Component>
  );
};

export default Icon;
