import { twMerge } from 'tailwind-merge';

import { type FormattedTextChild } from '../components/Cards/GuaranteeCard/types';

export function getFormattedText(listItems: FormattedTextChild[]) {
  const colorVariants: Record<string, string> = {
    green: 'text-text-green',
    white: 'text-text-white',
  };

  const listStyle = (item: FormattedTextChild) =>
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
