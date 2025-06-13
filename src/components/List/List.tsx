import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { useItemsWithId } from '@/hooks/useItemsWithId';
import { LIST_TEST_ID } from '@/lib/testIds';

import { renderRichText } from './helpers/renderRichText';
import { ListProps } from './types';

const List = ({
  className = '',
  bulletType = 'circle',
  listItems,
}: ListProps) => {
  const itemsWithId = useItemsWithId(listItems);

  if (!listItems || listItems.length === 0) return null;

  const isGreenStar = bulletType === 'star';

  const greenStarSvg = (
    <Image
      src="/icons/star.svg"
      alt="star icon"
      width={24}
      height={24}
      className="h-4 w-4 min-w-4 sm:h-6 sm:w-6 sm:min-w-6"
      data-testid="star-icon"
    />
  );

  return (
    <ul
      data-testid={LIST_TEST_ID}
      className={twMerge(
        isGreenStar
          ? 'flex flex-col gap-4 text-base sm:text-2xl'
          : 'list-disc pl-4 text-base sm:text-xl',
        className,
      )}
    >
      {itemsWithId.map(item => (
        <li
          key={item.id}
          className={
            isGreenStar
              ? 'flex items-center gap-4 lining-nums tabular-nums'
              : ''
          }
        >
          {isGreenStar && greenStarSvg}
          {typeof item.children === 'string'
            ? item.children
            : renderRichText(item.children)}
        </li>
      ))}
    </ul>
  );
};

export default List;
