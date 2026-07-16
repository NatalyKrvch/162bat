'use client';
import { type VacanciesListProps } from '@components/VacanciesList/types';

import { Accordion, Button } from '@/components';
import { goToForm } from '@/utils';

const VacanciesList = ({ vacancies }: VacanciesListProps) => {
  return (
    <div className="mx-auto flex flex-col gap-3 lg:max-w-[1000px] lg:gap-5">
      {vacancies.map(item => (
        <Accordion
          key={item.id}
          id={item.id}
          title={item.title}
          content={
            <div className="flex flex-col gap-6">
              <ul className="list-disc pb-2 pl-6 text-lg leading-[170%] md:text-xl lg:text-2xl">
                {item.list.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  onClick={goToForm}
                  className="text-base font-bold"
                >
                  Подати заявку
                </Button>
              </div>
            </div>
          }
        />
      ))}
    </div>
  );
};

export default VacanciesList;
