import { Section } from '@/components';
import guaranteesSectionData from '@/data/guaranteesSectionData.json';
import faqSectionData from '@/data/faqSectionData.json';
import heroSectionData from '@/data/heroSectionData.json';
import historySectionData from '@/data/historySectionData.json';
import stagesSectionData from '@/data/stagesSectionData.json';
import contactFormSectionData from '@/data/contactFormSectionData.json';
import {
  GuaranteesSection,
  HeroSection,
  StagesSection,
  FAQSection,
  ContactFormSection,
} from '@/modules';
import HistorySection from '@/modules/HistorySection/HistorySection';

const Home = () => {
  return (
    <main className="mb-20 flex flex-col items-center gap-20">
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

export default Home;
