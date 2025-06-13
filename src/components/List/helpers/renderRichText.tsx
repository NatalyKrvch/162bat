import { twMerge } from 'tailwind-merge';

import { RichListItem } from '../types';

export function renderRichText(listItem: RichListItem[]) {
  const colorVariants: Record<string, string> = {
    green: 'text-[#6A994E]',
    white: 'text-white',
  };

  return (
    <span>
      {listItem.map((child, i) => (
        <span
          key={i}
          className={twMerge(
            colorVariants[child.color ?? 'white'] ?? '',
            child.fontWeight === 'bold'
              ? 'font-bold'
              : child.fontWeight === 'normal'
                ? 'font-normal'
                : '',
            child.color === 'green' ? 'text-[0.8em]' : '',
          )}
        >
          {child.text}
        </span>
      ))}
    </span>
  );
}
