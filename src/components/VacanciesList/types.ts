type VacancyItem = {
  id: string;
  title: string;
  list: string[];
};

export interface VacanciesListProps {
  vacancies: VacancyItem[];
}
