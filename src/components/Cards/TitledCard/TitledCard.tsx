import { twMerge } from 'tailwind-merge';

import { TITLED_CARD_TEST_ID } from '@/lib/testIds';

import type { TitledCardProps } from './types';

const TitledCard = ({
  title,
  description,
  titleColor = 'default',
  className = '',
}: TitledCardProps) => {
  const titleClasses = twMerge(
    'text-2xl/7 font-bold',
    titleColor === 'green' && 'text-text-green',
  );

  return (
    <article
      data-testid={TITLED_CARD_TEST_ID}
      className={twMerge('flex flex-col gap-4', className)}
    >
      <h3 className={titleClasses}>{title}</h3>
      <div className="flex flex-col gap-3">
        {typeof description === 'string' ? (
          <p>{description}</p>
        ) : (
          description.map(item => <p key={item.id}>{item.text}</p>)
        )}
      </div>
    </article>
  );
};

export default TitledCard;
