import { twMerge } from 'tailwind-merge';

import { FormattedTextNode } from '../components/List/types';

export function getFormattedText(listItems: FormattedTextNode[]) {
  const colorVariants: Record<string, string> = {
    green: 'text-text-green',
    white: 'text-text-white',
  };

  const listStyle = (item: FormattedTextNode) =>
    twMerge(
      colorVariants[item.color ?? 'white'] ?? '',
      item.fontWeight === 'bold'
        ? 'font-bold'
        : item.fontWeight === 'normal'
          ? 'font-normal'
          : '',
      item.variant === 'number' ? 'text-sm sm:text-xl' : '',
    );

  return (
    <span>
      {listItems.map(item => (
        <span key={item.id} className={listStyle(item)}>
          {item.text}
        </span>
      ))}
    </span>
  );
}
