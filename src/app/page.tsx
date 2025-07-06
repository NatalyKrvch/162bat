import historySectionData from '@/data/historySectionData.json';
import HistorySection from '@/modules/HistorySection/HistorySection';

const Home = () => {
  return <HistorySection data={historySectionData} />;
};

export default Home;
