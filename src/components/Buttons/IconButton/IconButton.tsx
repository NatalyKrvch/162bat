import { twMerge } from 'tailwind-merge';

import { ICON_TEST_ID } from '@/lib/testIds';

import type { IconButtonProps } from './types';

const IconButton = ({ icon, onClick, className = '' }: IconButtonProps) => {
  return (
    <button
      className={twMerge(
        `flex h-11.5 w-11.5 cursor-pointer items-center justify-center rounded-[5px] bg-transparent transition-colors duration-300 hover:bg-(--color-green) active:bg-transparent active:text-(--color-btn-text-click-secondary)`,
        className,
      )}
      onClick={onClick}
      type="button"
      data-testid={ICON_TEST_ID}
    >
      {icon}
    </button>
  );
};

export default IconButton;
