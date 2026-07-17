import {
  Button,
  GuaranteeCard,
  InternalLink,
  SectionTitle,
} from '@/components';

import { type ContractsInfoSectionProps } from './types';

const ContractsInfoSection = ({ data }: ContractsInfoSectionProps) => {
  if (!data) {
    return null;
  }

  const { title, subtitle, guarantee, buttonText, readMoreLink } = data;

  return (
    <>
      <div className="flex flex-col items-start lg:mb-5 lg:flex-row lg:items-center lg:justify-between xl:mb-6">
        <SectionTitle className="xl:text-14 mb-3 w-fit text-left text-2xl leading-[120%] tracking-normal lg:text-5xl lg:leading-[110%]">
          {title}
        </SectionTitle>
      </div>
      <p className="mb-10 text-base leading-[150%] lg:mb-8 lg:text-lg xl:mb-10">
        {subtitle}
      </p>

      <div className="w-full">
        <GuaranteeCard
          title={guarantee.title}
          formattedContent={guarantee.formattedContent}
          contentBasis={'basis-2/3'}
          titleBasis={'basis-1/3'}
        />
      </div>

      <InternalLink href={readMoreLink}>
        <Button
          variant="link"
          className="text-lg leading-none font-bold tracking-normal uppercase lg:text-xl lg:leading-5"
        >
          {buttonText}
        </Button>
      </InternalLink>
    </>
  );
};

export default ContractsInfoSection;
