import vacanciesData from '@data/rolesSectionData.json';
import { type Metadata } from 'next';

import { Container, SectionTitle, VacanciesList } from '@/components';

export const metadata: Metadata = {
  title: 'Вакансії — 1 батальйон...',
  description: 'Актуальні вакансії...',
};

const VacanciesPage = () => {
  return (
    <Container className="pb-12 lg:pb-20">
      <div className="flex flex-col items-start pt-8 pb-10 lg:mb-10 lg:flex-row lg:items-center lg:justify-between lg:pt-20 lg:pb-10 xl:mb-10">
        <SectionTitle className="xl:text-14 w-fit text-left text-2xl leading-[120%] tracking-normal lg:text-5xl lg:leading-[110%]">
          {vacanciesData.title}
        </SectionTitle>
      </div>

      <VacanciesList vacancies={vacanciesData.items} />
    </Container>
  );
};

export default VacanciesPage;
