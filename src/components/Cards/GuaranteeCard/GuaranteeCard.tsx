import { BasicCard, List } from '@/components';

import type { GuaranteesCardType } from './types';

const GuaranteeCard = ({ title, formattedContent }: GuaranteesCardType) => {
  return (
    <BasicCard hasBorder={false} className={'mb-6 md:mb-8 lg:mb-10'}>
      <div className="flex flex-col px-4 py-6 md:px-7 md:py-5 lg:flex-row lg:pt-10 lg:pr-8 lg:pb-10 lg:pl-8">
        <div className="text-green mb-4 flex basis-4/9 text-lg leading-[120%] font-bold md:mb-5 md:text-2xl lg:max-w-[450px] lg:items-center lg:text-[32px]">
          {title}
        </div>

        <div className="basis-5/9">
          <List listItems={formattedContent} bulletType="star" />
        </div>
      </div>
    </BasicCard>
  );
};

export default GuaranteeCard;
