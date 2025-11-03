import { STAGE_CARD_TEST_ID } from '@/lib/testIds';

import type { StageCardProps } from './types';

const StageCard = ({ step, title, description }: StageCardProps) => {
  return (
    <article
      data-testid={STAGE_CARD_TEST_ID}
      className="rounded-default border-grey bg-bg-secondary flex w-full items-center gap-4 border-1 px-3 py-5.5 lg:h-[200px] lg:px-8 xl:items-start"
    >
      <p className="rotated text-description text-4xl-40 leading-[140%] font-bold tracking-normal">
        {step}
      </p>
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl leading-[120%] font-bold tracking-normal">
          {title}
        </h3>
        <p className="lg:text-basis text-base leading-[140%] tracking-normal">
          {description}
        </p>
      </div>
    </article>
  );
};

export default StageCard;
