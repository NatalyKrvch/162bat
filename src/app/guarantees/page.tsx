import guaranteesPageData from '@data/guaranteesPageData.json';

import { Container, GuaranteeCard, SectionTitle } from '@/components';

import type { GuaranteesPageDataType } from './types';

const GuaranteesPage = () => {
  const dataToShow = guaranteesPageData as GuaranteesPageDataType;

  return (
    <Container className={'pb-9 md:pb-12 lg:pb-20'}>
      <div className="mt-8 mb-6 flex flex-col lg:mb-10 lg:justify-between xl:mt-20 xl:mb-20">
        <SectionTitle className="xl:text-14 mb-8 w-fit text-left text-2xl leading-[120%] tracking-normal lg:text-5xl lg:leading-[110%] xl:max-w-[1000px]">
          {dataToShow.title}
        </SectionTitle>
        <p className="text-green mb-2 text-xl font-bold lg:text-3xl">
          {dataToShow.intro.subtitle}
        </p>
        <p className="text-lg leading-[130%] lg:text-xl">
          {dataToShow.intro.description}
        </p>
      </div>

      {dataToShow.sections.map((item, index) => (
        <GuaranteeCard
          key={index}
          title={item.title}
          formattedContent={item.formattedContent}
        />
      ))}
    </Container>
  );
};

export default GuaranteesPage;
