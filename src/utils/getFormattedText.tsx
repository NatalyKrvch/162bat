import { twMerge } from 'tailwind-merge';

import { FormattedTextNode } from '../components/List/types';

export function getFormattedText(listItem: FormattedTextNode[]) {
  const colorVariants: Record<string, string> = {
    green: 'text-text-green',
    white: 'text-text-white',
  };

  return (
    <span>
      {listItem.map(child => (
        <span
          key={child.id}
          className={twMerge(
            colorVariants[child.color ?? 'white'] ?? '',
            child.fontWeight === 'bold'
              ? 'font-bold'
              : child.fontWeight === 'normal'
                ? 'font-normal'
                : '',
            child.variant === 'number' ? 'text-sm sm:text-xl' : '',
          )}
        >
          {child.text}
        </span>
      ))}
    </span>
  );
}
