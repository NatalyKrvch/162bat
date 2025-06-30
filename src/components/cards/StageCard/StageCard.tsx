import { STAGE_CARD_TEST_ID } from '@/lib/testIds';

import { StageCardProps } from './types';

const StageCard = ({ step, title, description }: StageCardProps) => {
  return (
    <article
      data-testid={STAGE_CARD_TEST_ID}
      className="rounded-default border-grey bg-bg-secondary flex w-full items-center gap-4 border-1 px-8 py-6"
    >
      <p className="rotated text-description text-4xl-40 font-bold">{step}</p>
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl/7 font-bold">{title}</h3>
        <p className="text-lg/6">{description}</p>
      </div>
    </article>
  );
};

export default StageCard;
