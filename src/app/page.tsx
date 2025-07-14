import { heroSectionData } from '@/data';
import guaranteesSectionData from '@/data/guaranteesSectionData.json';
import historySectionData from '@/data/historySectionData.json';
import { GuaranteesSection, HeroSection } from '@/modules';
import HistorySection from '@/modules/HistorySection/HistorySection';

const Home = () => {
  return (
    <div className="mb-20 flex flex-col items-center gap-20">
      <HeroSection data={heroSectionData} />
      <HistorySection data={historySectionData} />
      <GuaranteesSection data={guaranteesSectionData} />
    </div>
  );

}

export default Home;
