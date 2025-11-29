import { type Metadata } from 'next';

import { Section } from '@/components';
import contactFormSectionData from '@/data/contactFormSectionData.json';
import faqSectionData from '@/data/faqSectionData.json';
import guaranteesSectionData from '@/data/guaranteesSectionData.json';
import heroSectionData from '@/data/heroSectionData.json';
import historySectionData from '@/data/historySectionData.json';
import rolesSectionData from '@/data/rolesSectionData.json';
import stagesSectionData from '@/data/stagesSectionData.json';
import {
  ContactFormSection,
  FAQSection,
  GuaranteesSection,
  HeroSection,
  RolesSection,
  StagesSection,
} from '@/modules';
import HistorySection from '@/modules/HistorySection/HistorySection';

export const metadata: Metadata = {
  title:
    '1 батальйон територіальної оборони 119 окремої бригади територіальної оборони',
  description:
    'Долучайся до 1 батальйону 119 окремої бригади територіальної оборони. Коротко про підрозділ, умови служби та форма заявки на вступ.',
};

const HomePage = () => {
  return (
    <main className="mb-10 flex flex-col items-center gap-15 lg:mb-20 lg:gap-25">
      <Section
        id="hero"
        fullWidth
        containerClassName="min-h-screen-minus-header relative overflow-hidden"
      >
        <HeroSection data={heroSectionData} />
      </Section>

      <Section id="history">
        <HistorySection data={historySectionData} />
      </Section>

      <Section id="stages" className="flex flex-col items-center gap-10">
        <StagesSection data={stagesSectionData} />
      </Section>

      <Section id="roles" className="flex flex-col items-center gap-10">
        <RolesSection data={rolesSectionData} />
      </Section>

      <Section id="guarantees" className="flex flex-col items-center gap-10">
        <GuaranteesSection data={guaranteesSectionData} />
      </Section>

      <Section id="faq" className="flex flex-col items-center gap-10">
        <FAQSection data={faqSectionData} />
      </Section>

      <Section id="contactForm" className="flex flex-col items-center gap-10">
        <ContactFormSection data={contactFormSectionData} />
      </Section>
    </main>
  );
};

export default HomePage;
