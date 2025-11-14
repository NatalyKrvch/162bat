import vacanciesData from '@data/rolesSectionData.json';

import { Accordion, Container, SectionTitle } from '@/components';

const VacanciesPage = () => {
  const title = vacanciesData.title;
  const vacancies = vacanciesData.items;

  return (
    <Container className="pb-12 lg:pb-20">
      <div className="flex flex-col items-start pt-8 pb-10 lg:mb-10 lg:flex-row lg:items-center lg:justify-between lg:pt-20 lg:pb-10 xl:mb-10">
        <SectionTitle className="xl:text-14 w-fit text-left text-2xl leading-[120%] tracking-normal lg:text-5xl lg:leading-[110%]">
          {title}
        </SectionTitle>
      </div>

      <div className="mx-auto flex flex-col gap-3 lg:max-w-[1000px] lg:gap-5">
        {vacancies.map(item => (
          <Accordion
            key={item.id}
            id={item.id}
            title={item.title}
            content={
              <ul className="list-disc pl-6 text-lg leading-[170%] md:text-xl lg:text-2xl">
                {item.list.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            }
          />
        ))}
      </div>
    </Container>
  );
};

export default VacanciesPage;
