import { Section } from '@/components';
import guaranteesSectionData from '@/data/guaranteesSectionData.json';
import heroSectionData from '@/data/heroSectionData.json';
import historySectionData from '@/data/historySectionData.json';
import stagesSectionData from '@/data/stagesSectionData.json';
import { GuaranteesSection, HeroSection, StagesSection } from '@/modules';
import HistorySection from '@/modules/HistorySection/HistorySection';

const Home = () => {
  return (
    <main className="mb-20 flex flex-col items-center gap-20">
      <Section
        fullWidth
        containerClassName="min-h-screen-minus-header relative overflow-hidden"
      >
        <HeroSection data={heroSectionData} />
      </Section>

      <Section>
        <HistorySection data={historySectionData} />
      </Section>

      <Section className="flex flex-col items-center gap-10">
        <GuaranteesSection data={guaranteesSectionData} />
      </Section>
    </main>
  );
};

export default Home;
