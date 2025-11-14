import { SectionTitle, StageCard } from '@/components';

import type { StagesSectionProps } from './types';

const StagesSection = ({ data }: StagesSectionProps) => {
  if (!data) return null;

  const { title, subtitle, steps, finalMessage } = data;

  return (
    <>
      <SectionTitle className="mb-4 text-2xl leading-[110%] tracking-normal lg:mb-6 lg:text-5xl xl:mb-8 xl:text-[56px]">
        {title}
      </SectionTitle>

      <div className="mb-6 flex flex-col gap-3 lg:mb-8 lg:gap-4 xl:mb-10 xl:gap-5">
        {subtitle.map(item => (
          <p
            key={item}
            className="text-base leading-[150%] font-normal tracking-normal lg:text-lg"
          >
            {item}
          </p>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <div className="columns-1 gap-4 lg:mb-1.5 xl:mb-2.5 xl:columns-2 xl:gap-6">
          {steps.map(step => (
            <div key={step.step} className="mb-5 break-inside-avoid">
              <StageCard {...step} />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center lg:max-w-[960px]">
          <p className="lg:text-4xl-40 mb-8 text-center text-[32px] leading-[110%] font-bold tracking-normal text-(--color-main) uppercase">
            {finalMessage.title}
          </p>

          <p className="text-center text-base leading-[130%] tracking-normal lg:text-2xl lg:leading-[120%]">
            {finalMessage.description}
          </p>

          <p className="text-center text-base leading-[130%] font-bold tracking-normal lg:text-2xl lg:leading-[120%]">
            {finalMessage.callToAction}
          </p>
        </div>
      </div>
    </>
  );
};

export default StagesSection;
