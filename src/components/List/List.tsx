import { LIST_TEST_ID } from '@/lib/testIds';

import { ListProps } from './types';

const List = ({ className = '', bulletType = 'circle', items }: ListProps) => {
  const isGreenStar = bulletType === 'star';
  const greenStarSvg = (
    <svg
      className="h-4 w-4 min-w-4 sm:h-6 sm:w-6 sm:min-w-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0L13.1863 7.57259L18 1.6077L15.2411 8.75891L22.3923 6L16.4274 10.8137L24 12L16.4274 13.1863L22.3923 18L15.2411 15.2411L18 22.3923L13.1863 16.4274L12 24L10.8137 16.4274L6 22.3923L8.75891 15.2411L1.6077 18L7.57259 13.1863L0 12L7.57259 10.8137L1.6077 6L8.75891 8.75891L6 1.6077L10.8137 7.57259L12 0Z"
        fill="#6A994E"
      />
    </svg>
  );

  return (
    <ul
      data-testid={LIST_TEST_ID}
      className={`${className} ${isGreenStar ? 'flex flex-col gap-4 text-base sm:text-2xl' : 'list-disc pl-4 text-base sm:text-xl'}`}
    >
      {items.map((item, index) => (
        <li
          key={index}
          className={isGreenStar ? 'flex items-center gap-2' : ''}
        >
          {isGreenStar && greenStarSvg}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
