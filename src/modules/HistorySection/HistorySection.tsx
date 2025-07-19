import {
  BasicCard,
  Button,
  InternalLink,
  SectionTitle,
  TitledCard,
} from '@/components';

import type { HistorySectionProps } from './types';

const HistorySection = ({ data }: HistorySectionProps) => {
  if (!data) {
    return null;
  }

  const { title, readMoreText, readMoreLink, introText, card } = data;

  return (
    <>
      <div className="flex flex-col items-start lg:mb-6 lg:flex-row lg:items-center lg:justify-between xl:mb-8">
        <SectionTitle className="xl:text-14 w-fit text-left text-2xl leading-[120%] tracking-normal lg:text-5xl lg:leading-[110%]">
          {title}
        </SectionTitle>

        <InternalLink href={readMoreLink}>
          <Button
            variant="link"
            className="text-lg leading-none font-bold tracking-normal uppercase lg:text-xl lg:leading-5"
          >
            {readMoreText}
          </Button>
        </InternalLink>
      </div>
      <p className="mb-10 max-w-240 text-base leading-[150%] lg:mb-8 lg:text-lg xl:mb-10">
        {introText}
      </p>

      <div className="mx-auto w-full md:px-16 lg:px-20 xl:px-52">
        <BasicCard className="p-5.5 lg:px-8 lg:py-10">
          <TitledCard
            title={card.title}
            titleColor="green"
            className="leading-[140%] font-normal tracking-normal lg:text-lg"
            description={card.description}
          />
        </BasicCard>
      </div>
    </>
  );
};

export default HistorySection;
