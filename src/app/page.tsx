
import historySectionData from '@/data/historySectionData.json';
import HistorySection from '@/modules/HistorySection/HistorySection';
import { guaranteesSectionData, heroSectionData } from '@/data';
import { GuaranteesSection, HeroSection } from '@/modules';

const Home = () => {
  return (
    <div className="mb-20 flex flex-col items-center gap-20">
      <HeroSection data={heroSectionData} />
      <HistorySection data={historySectionData} />
      <GuaranteesSection data={guaranteesSectionData} />
    </div>
  );
};

export default Home;
