import { twMerge } from 'tailwind-merge';

import { TITLED_CARD_TEST_ID } from '@/lib/testIds';

import type { TitledCardProps } from './types';

const TitledCard = ({
  title,
  description,
  className = '',
  titleColor = 'default',
}: TitledCardProps) => {
  const titleClasses = twMerge(
    'text-xl leading-[150%] font-bold lg:text-2xl lg:leading-[120%]',
    titleColor === 'green' && 'text-text-green',
  );

  return (
    <article
      data-testid={TITLED_CARD_TEST_ID}
      className={twMerge('flex flex-col gap-4', className)}
    >
      <h3 className={titleClasses}>{title}</h3>
      <div className="flex flex-col gap-3">
        {Array.isArray(description) ? (
          description.map((item, index) => (
            <p key={index}>{typeof item === 'string' ? item : item.text}</p>
          ))
        ) : (
          <p>{description}</p>
        )}
      </div>
    </article>
  );
};

export default TitledCard;
