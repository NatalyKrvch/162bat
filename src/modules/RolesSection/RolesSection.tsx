import { Carousel, SectionTitle } from '@/components';
import RolesCard from '@/components/Cards/RolesCard/RolesCard';

import { type RolesSectionProps } from './types';

const RolesSection = ({ data }: RolesSectionProps) => {
  if (!data) {
    return null;
  }

  const { title, items } = data;

  const ITEMS_PER_SLIDE_ON_DESKTOP = 3;

  const slides =
    (items &&
      items.map((item, index) => (
        <div className="h-full" key={index}>
          <RolesCard title={item.title} list={item.list} />
        </div>
      ))) ||
    [];

  return (
    <>
      <div className="flex flex-col items-start lg:mb-10 lg:flex-row lg:items-center lg:justify-between xl:mb-10">
        <SectionTitle className="xl:text-14 w-fit text-left text-2xl leading-[120%] tracking-normal lg:text-5xl lg:leading-[110%]">
          {title}
        </SectionTitle>
      </div>
      <div className="mt-8 w-full max-w-full">
        <Carousel perView={ITEMS_PER_SLIDE_ON_DESKTOP}>{slides}</Carousel>
      </div>{' '}
    </>
  );
};

export default RolesSection;
