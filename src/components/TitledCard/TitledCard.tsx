import { twMerge } from 'tailwind-merge';

import { TITLED_CARD_TEST_ID } from '@/lib/testIds';

import { TitledCardProps } from './types';

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
    <section
      data-testid={TITLED_CARD_TEST_ID}
      className={twMerge('flex flex-col gap-4', className)}
    >
      <h3 className={titleClasses}>{title}</h3>
      <div className="flex flex-col gap-3">
        {typeof description === 'string' ? (
          <p>{description}</p>
        ) : (
          description.map(item => (
            <p key={item.id} className="">
              {item.text}
            </p>
          ))
        )}
      </div>
    </section>
  );
};

export default TitledCard;
