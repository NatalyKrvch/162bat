import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { LIST_TEST_ID, STAR_ICON_TEST_ID } from '@/lib/testIds';
import { getFormattedText } from '@/utils';

import type { ListProps } from './types';

const STAR_ICON = (
  <Image
    src="/icons/star.svg"
    alt="star icon"
    width={24}
    height={24}
    className="h-5 w-5 min-w-5 sm:h-6 sm:w-6 sm:min-w-6"
    data-testid={STAR_ICON_TEST_ID}
  />
);

const List = ({
  listItems,
  className = '',
  bulletType = 'circle',
}: ListProps) => {
  if (listItems.length === 0) return null;

  const isGreenStar = bulletType === 'star';

  const listStyle = twMerge(
    isGreenStar ? 'flex flex-col gap-4' : 'list-disc pl-4',
    className,
  );

  const listItemsStyle = isGreenStar
    ? 'flex items-center gap-4 lining-nums tabular-nums'
    : '';

  return (
    <ul data-testid={LIST_TEST_ID} className={listStyle}>
      {listItems.map(item => (
        <li key={item.id} className={listItemsStyle}>
          {isGreenStar && STAR_ICON}
          {typeof item.children === 'string'
            ? item.children
            : getFormattedText(item.children)}
        </li>
      ))}
    </ul>
  );
};

export default List;
