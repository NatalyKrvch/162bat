import FAQCard from '@components/Cards/FAQCard/FAQCard';
import { type FAQCardProps } from '@components/Cards/FAQCard/types';
import Container from '@components/Container/Container';
import { type Metadata } from 'next';

import { SectionTitle } from '@/components';
import faqSectionData from '@/data/faqSectionData.json';

export const metadata: Metadata = {
  title:
    'FAQ — 1 батальйон територіальної оборони 119 окремої бригади територіальної оборони',
  description:
    'Відповіді на популярні запитання про службу в 1 батальйоні територіальної оборони 119 окремої бригади територіальної оборони.',
};

const FaqPage = () => {
  const dataToShow = faqSectionData.items as FAQCardProps[];
  return (
    <Container className="pb-20">
      <div className="mt-8 flex flex-col items-start lg:mb-10 lg:flex-row lg:items-center lg:justify-between xl:mt-20 xl:mb-20">
        <SectionTitle className="xl:text-14 w-fit text-left text-2xl leading-[120%] tracking-normal lg:text-5xl lg:leading-[110%]">
          {faqSectionData.title}
        </SectionTitle>
      </div>

      {dataToShow.map((item, index) => (
        <FAQCard key={index} question={item.question} answer={item.answer} />
      ))}
    </Container>
  );
};

export default FaqPage;
